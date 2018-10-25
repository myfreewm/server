/**
 *  定义数据库的基本操作
 *
 * */


var Model = require('./model');


/**
 * descrition: insert
 * params : models 模型 obj 数据 callback 结果回调
 * return callback
 *
 * */

function insert(Models,obj,callback){

    var newUser = new Models(obj);

    newUser.save(function(err, res){

        if(err){
            
            callback(false, err);
        }else{
            
            callback(true, res);
        }
    })

}

/**
 * description : update
 * */

function update(Models,target,result,callback){

    Models.update(target,result,function(err,res){

        if(err){

            callback(false, err);
        }else{

            callback(true, res);
        }
    })
}


// test

//insert(Model,{username:'123'},function(status,res){console.log(status)});

update(Model,{username:'news123'},{username:'news'},function(status,res){console.log(status,res)});


