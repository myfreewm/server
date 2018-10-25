/**
 * description: time utils
 * copyright  : jie.zou, 2014-01-02 1148, created
 * */

'use strict';

// time format:04 || 30
var getFormatTimeData = function (value){

    return parseInt(value)>=10?(value+''):('0'+value);
}

// time format:012 || 123 || 001
var getFormatMinSecondData = function (value){

    if(parseInt(value)>=10 && parseInt(value)<=100){
        return '0'+value;
    }else if(parseInt(value)>=100){
        return ''+value;
    }else if(parseInt(value)<10){
        return '00'+value;
    }
}

//time format: 20130630122023
var getCurrentTime = function (){

    var current_time = new Date();
    return current_time.getFullYear()+''+getFormatTimeData((current_time.getMonth()+1))+''+getFormatTimeData(current_time.getDate())+""+getFormatTimeData(current_time.getHours())+""+getFormatTimeData(current_time.getMinutes())+""+getFormatTimeData(current_time.getSeconds())+""+getFormatMinSecondData(current_time.getMilliseconds());
}

// time format:2013-06-30 12:20:20
var getCurrentTime_ = function (){

    var current_time = new Date();
    return current_time.getFullYear()+'-'+getFormatTimeData((current_time.getMonth()+1))+'-'+getFormatTimeData(current_time.getDate())+" "+getFormatTimeData(current_time.getHours())+":"+getFormatTimeData(current_time.getMinutes())+":"+getFormatTimeData(current_time.getSeconds())+" "+getFormatMinSecondData(current_time.getMilliseconds());
}

//time format: 20140102
var getCurrentDate = function(){

    var current_time = new Date();
    return current_time.getFullYear()+''+getFormatTimeData((current_time.getMonth()+1))+''+getFormatTimeData(current_time.getDate());
}

//date format: 2014-01-02
var getCurrentDate_ = function(){

    var current_time = new Date();
    return current_time.getFullYear()+'-'+getFormatTimeData((current_time.getMonth()+1))+'-'+getFormatTimeData(current_time.getDate());
}

// return second
var getMidTime = function (start_time){

    var current_time = new Date();
    return (current_time-start_time)/1000+'s';
}

// return year 
var getCurrentYear = function(){

    return (new Date()).getFullYear()+"";
}

// return month
var getCurrentMonth = function(){

    return getFormatTimeData((new Date()).getMonth()+1)+"";
}

// return days
var getCurrentDay = function(){

    return getFormatTimeData((new Date()).getDate())+"";
}

// expors all funs

module.exports.getFormatTimeData      = getFormatTimeData;
module.exports.getFormatMinSecondData = getFormatTimeData;
module.exports.getCurrentTime         = getCurrentTime;
module.exports.getCurrentTime_        = getCurrentTime_;
module.exports.getMidTime             = getMidTime;
module.exports.getCurrentDate         = getCurrentDate;
module.exports.getCurrentDate_        = getCurrentDate_;
module.exports.getCurrentYear         = getCurrentYear;
module.exports.getCurrentMonth        = getCurrentMonth;
module.exports.getCurrentDay          = getCurrentDay;


