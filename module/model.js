
/**
 * 创建数据模型
 *
 * */

var mongoose = require('./db');

// 模型骨架

var Schema = new mongoose.Schema({

    username : {type: String},
    password : {type: Number, default: 123456},
    time     : {type: Date}
});

var Model = mongoose.model('user', Schema);

module.exports = Model;
