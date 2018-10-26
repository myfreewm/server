
/**
 * 创建数据模型
 *
 * */

var mongoose = require('./db');

// 模型骨架


var Users = new mongoose.Schema({

    username  : {type: String},
    password  : {type: String, default: '123456'},
    registerTime : {type: Date, default: new Date()}
})

var UserModel = mongoose.model('user',Users);

module.exports.UserModel = UserModel;
