var path = require('path');

var express = require('express');

var config = appRequire('config');
var ResponseUtils = appRequire('utils.response');

//login passport
// var passport = appRequire('auth.google');
var passport = require('passport');

// var dashboard = 'dashboard';

module.exports = function (app) {

	app.use('/', express.static(path.join(config.root, 'client', 'dist')));
	
	app.all('/api/*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Z-Key, Authorization");
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
        res.header("Content-Type", "application/json; charset=UTF-8");
        next();
      });
	
	app.use('/api/user/*', restrictApi);
	app.use('/api', appRequire('api.users'));

	app.use('*', express.static(path.join(config.root, 'client', 'dist')));
	
	function restrictApi(req, res, next){
		var token = getToken(req.headers);
		if(!token){
			return res.json(ResponseUtils.responseMessage(false, 'Unauthenticated'));
		}
		next();
	}

	function getToken(headers) {
		if (headers && headers.authorization) {
			return headers.authorization;	
		} else {
			return null;
		}
	}
};