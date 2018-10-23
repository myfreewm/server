
var bunyan = require('bunyan');
var path = require('path');
var time = require('./time');
var appConf = require('../config/appconf');


var log = bunyan.createLogger({

    name: 'trace_logger',
    streams:[
        {
            level:'info',
            path:appConf["log"] + time.getCurrentDate() + '_access.log'
        },
        {
            level:'error',
            path:appConf["log"] + time.getCurrentDate() + '_error.log'
        }
    ]
})

module.exports = log;
