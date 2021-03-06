var path = require('path');
var environment = process.env.NODE_ENV || 'development';

var config = {   
    
    root : path.normalize(__dirname + './../../../'),
    secret:'peoplegrovesecret',
    mongoose : {
        uri : 'mongodb://127.0.0.1/pg'
    },
};

function merge(config, env){
    for(var key in env){
        config[key] = env[key];
    }
    return config;
}

module.exports = merge(config, require('./' + environment));