/**
 *  定义数据库的基本操作
 *
 * */


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

function update(Models,target,data,callback){

    Models.update(target,data,function(err,res){

        if(err){

            callback(false, err);
        }else{

            callback(true, res);
        }
    })
}

/**
 * descrition remove
 * params: Models -> schema  conditions -> object  callback -> status and result
 *
 * */

function remove(Models, conditions, callback){

    Models.remove(conditions, function(err, res){

        if(err){

            callback(false, err);
        }else{

            callback(true, res);
        }
    })
}

/**
 * find
 *
 * */

function find(Models, conditions, callback){

    Models.find(conditions, function(err,res){

        console.log(res);
        if(err){

            callback(false, err);
        }else{

            callback(true, res);
        }
    })
}

/**
 * count
 *
 * */

function count(Models, conditions, callback){

    Models.count(conditions, function(err, res){

        if(err){

            callback(false, err);
        }else{

            callback(true, res);
        }
    })
}

/**
 * 分页
 *
 * */

function getPages(Models,pageObj,callback,conditions){

    var pageSize      = pageObj.pageSize;        // 一页多少条
    var currentPage   = pageObj.currentPage;  // 当前第几页
    var sort          = pageObj.sort || false;       // 排序 （按照登录时间倒序） eg:  sort = {'logindate' : -1}

    var conditions    = conditions || {};
    var skipnum = (currentPage - 1) * pageSize;  // 跳过数

    Models.find(conditions).skip(skipnum).limit(pageSize).sort(sort).exec(function(err, res){

        if(err){

            callback(false, err);
        }else{

            callback(true, res);
        }
    })
}

// exports

module.exports.insert   = insert;
module.exports.remove   = remove;
module.exports.update   = update;
module.exports.getPages = getPages;
module.exports.count    = count;
module.exports.find     = find;



