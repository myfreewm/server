
/**
 * login router
 *
 * */

var express = require('express');

var router  = express.Router();

// 数据库
var schema = require('../model/model');
var db     = require('../model/db_operation');



router.get('/', function(req, res, next){

    res.redirect('login.html');
});

// 登录
router.post('/', function(req, res, next){

    var params = req.body;
    
    var res = res; 

    db.find(schema.UserModel, {'username':params.username}, function(status, result){

        if(status){

            res.send('login success');
        }else{
            
            res.send('please register')
        }
    })

})


// 注册
router.post('/register', function(req, res, next){

    var params = req.body;
    
    db.find(schema.UserModel, {'username':params.username}, function(status, result){
        
        if(status){
            
            if(result.length > 0){
                
                res.send('the user has registered');
            }else{

                addNewUser(params,res);
            }

        }else{
            
            res.send({status:500,errMsg:'connect mongodb fail'})
        }
    })
        
    
});

// 添加新用户
function addNewUser(loginInfo,res){

    db.insert(schema.UserModel,loginInfo,function(status, result){

        if(status){

            res.send('add loginInfo success');
        }else{

            res.send('add loginInfo fail');
        }
    })

}
module.exports = router;
