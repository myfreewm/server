/**
 *  测试表单提交
 *  作者：李想
 * */

var express = require('express');

var fs      = require('fs');

var path    = require('path');

// init route
var router = express.Router();

var count  = 0;

router.post('/',function(req,res,next){

    console.log(req.body);
    count++;

    var chunk    = '';
    var params   = req.body;

    chunk += params.name;
    chunk += '||'+count;
    
    try{
        fs.appendFile(path.join(__dirname,'../data/4.txt'), chunk, function(err,data){

        if(err){

            console.log('write file fail');
        }else{

            console.log('write file success');
        }
    })

    }catch(e){
        
        console.log(e);
    }
    
    res.send("question success");

})

module.exports = router;
