var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var Users = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    timezone: {
        type: String,
        required: true
    },
    updatedon: {
        type: Date
    }, 
    reservations: [{
        time: Date,
        booked_by:{
            type: String,
            default: null
        },
        booked_by_id: {
         type: Schema.Types.ObjectId,
         default: null
        },
        booked_for: {
            type: String,
            default: null
        },
        booked_for_id: {
            type: Schema.Types.ObjectId,
            default: null
        }
    }]
});

Users.pre('save', function (next) {
    var user = this;
    this.updated_at = Date.now();
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

Users.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', Users);