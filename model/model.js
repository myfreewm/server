
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

// 注册用户

var registerUser = new mongoose.Schema({
    
    username      :  {type : String},                   // 用户名 用于登录
    
    realname      :  {type : String},                   // 真实姓名
    
    gender        :  {type : Number, default : 0},      // 性别: 0->未知 1->man 2 -> woman
     
    postingtype   :  {type : String},                   // 职位类型

    birthday      :  {type : String},                   // 出生日期

    phonenumber   :  {type : String},                   // 手机号码

    password      :  {type : String},                   // 密码

    address       :  {type : String},                   // 居住地址

    registerTime  :  {type: Date, default: new Date()}  // 注册时间
});


// 生成mongodb

var UserModel = mongoose.model('user',Users);

var RegisterUserModel = mongoose.model('register',registerUser);


module.exports.UserModel         = UserModel;

module.exports.RegisterUserModel = RegisterUserModel;
