/**
 * 管理所有的路由
 * */


var loginRouter    = require('./login');

var questionRouter = require('./question');

var uploadRouter   = require('./upload');

var usersRouter    = require('./users');


// 集中导出
module.exports.loginRouter    = loginRouter;

module.exports.questionRouter = questionRouter;

module.exports.uploadRouter   = uploadRouter;

module.exports.usersRouter    = usersRouter;
