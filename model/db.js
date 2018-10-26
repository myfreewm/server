
/**
 *  连接数据库，保存数据库的基本配置
 *
 * */

var mongoose   =   require("mongoose");

var dataConf   =   require('./../config/dataconf');

var dbPath     = dataConf['dbPath'];
// connect mongo
mongoose.connect(dbPath);

var db = mongoose.connection;

// listen status:error
db.on('error', function(err){

    console.log('数据库链接失败:' + err);
})

// listen status:open
db.on('open', function(){

    console.log('数据库链接成功',dbPath);
})

// listen status:disconnected
db.on('disconnected', function(){

    console.log('数据库断开');
})


module.exports = mongoose;


