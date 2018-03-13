var async = require('async');
var mongoose = require('mongoose');
var ResponseUtils = appRequire('utils.response');
var request = require("request");
var async = require('async');

var passport = require('passport');
var config = appRequire('config');
require('../login.google.js')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var User = appRequire("model.users");

function signup(req, res) {
    console.log(req.body, 'request');
    if (!req.body.email || !req.body.password) {
        return res.json(ResponseUtils.responseMessage(false, 'Please pass email and password.'));
    } else {
        var newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            timezone: req.body.timezone
        });
        // save the user
        newUser.save(function (err) {
            if (err) {
                if (err.code == 11000) {
                    console.log(err);
                    return res.json(ResponseUtils.responseMessage(false, 'email already exists'));
                } else {
                    console.log(err);
                    return res.json(ResponseUtils.responseMessage(false, 'error in saving'));
                }
            }
            return res.json(ResponseUtils.responseMessage(true, 'Successful created new user.'));
        });
    }
}

function updateTimezone(req, res) {
    var userId = req.params.id;
    var timezone = req.body.timezone;
    var query = {
        $set: { timezone: timezone }
    };
    User.findByIdAndUpdate(userId, query, { new: true }, function (err, result) {
        if (err) {
            return res.json(ResponseUtils.responseMessage(false, 'error in saving'));
        }

        return res.json(ResponseUtils.responseMessage(true, 'success', result));
    });
}

function login(req, res) {
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }

        if (!user) {
            // setTimeout(() => {
            return res.json(ResponseUtils.responseMessage(false, 'User Not Found'));
            // }, 5000);
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.sign(user.toJSON(), config.secret);
                    // return the information including token as JSON
                    var data = {
                        token: token,
                        user: {
                            email: user.email,
                            name: user.name,
                            timezone: user.timezone,
                            reservations: user.reservations,
                            _id: user._id
                        }
                    };
                    return res.json(ResponseUtils.responseMessage(true, 'Logged In', data));
                } else {
                    return res.json(ResponseUtils.responseMessage(false, 'wrong Username or password'));
                    // res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
    });
}

function getUser(req, res) {
    var userId = req.params.id;
    User.findById(userId).select('name _id timezone reservations email').exec(function (err, user) {
        if (err) {
            return res.json(ResponseUtils.responseError(err));
        }
        return res.json(ResponseUtils.responseMessage(true, 'success', user));
    });
}

function makeReservation(req, res) {
    var userId = req.body.userId;
    var loggedIn = req.body.loggedIn;
    var timeSlot = req.body.timeSlot;
    var userName = req.body.userName;
    var loggedIn_name = req.body.loggedIn_name;

    var query1 = {
        $addToSet: {
            reservations: {
                time: timeSlot,
                booked_by: loggedIn_name,
                booked_by_id: loggedIn
            }
        }
    };

    var query2 = {
        $addToSet: {
            reservations: {
                time: timeSlot,
                booked_for: userName,
                booked_for_id: userId
            }
        }
    };
    async.parallel({
        booked_for: function (parallelCallback) {
            User.findByIdAndUpdate(userId, query1, { new: true }, function (err, result) {
                if (err) {
                    return res.json(ResponseUtils.responseMessage(false, 'error in saving'));
                }

                parallelCallback(null, result);
            });
        },
        booked_by: function (parallelCallback) {
            User.findByIdAndUpdate(loggedIn, query2, { new: true }, function (err, result) {
                if (err) {
                    return res.json(ResponseUtils.responseMessage(false, 'error in saving'));
                }

                parallelCallback(null, result);
            });
        },
    },
        function (err, result) {
            if (err) {
                return res.json(ResponseUtils.responseError(err));
            }
            // console.log(result, 'parallel result');
            return res.json(ResponseUtils.responseMessage(true, 'success', result));
        });
}


module.exports = {
    signup: signup,
    login: login,
    getUser: getUser,
    updateTimezone: updateTimezone,
    makeReservation: makeReservation
};