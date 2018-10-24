/**
 * file utils
 *
 * */

var fs      = require('fs');

var logger  = require('./logger');

var writeDataToFile = function(file_path,json_data,callback){

    try{

        var _data = json_data;
        _data = JSON.stringify(_data);

        fs.writeFile(file_path,_data,function(err){

            if(err){

                callback(false,err);
            }else{

                callback(true,true);
            }
        })
    }catch(e){

        logger.error('writeDataToFile - error' + err);
        
        callback(false,err)
    }
}

var appendDataToFile = function(file_path,data,callback){

    try{

        fs.appendFile(file_path,data,function(err){

            if(err){
                
                callback(false,err);
            }else{
                
                callback(true,true);
            }
        })
    }catch(err){

        logger.error('appendDataFile - error' + err);

        callback(false,err);
    }
}

var readDataFromFile = function(file_path,callback){

    try{

        fs.readFile(file_path,'utf-8',function(err,data){

            if(err){
                
                callback(false,err)
            }else{

                var _data = {};

                if(data){

                    _data = JSON.parse(data)||data;
                    callback(true,_data)
                }else{

                    callback(false,false);
                }

            }
        })
    }catch(err){
        
        logger.error('readDataFromFile - error' + err)
        callback(false,err);
    }
}

var delFile = function(path,callback){

    if(!path){

        callback(false,'missing path');
        return;
    }else{

        try{

            fs.unlink(path,function(err,data){

                if(err){
                    
                    callback(false,err);
                }else{
                    
                    callback(true,'del file success');
                }
            })
        }catch(err){

            callback(false,'del file fail');
        }
    }
}

var getContent = function(path,callback){

    if(!path){

        callback(false,'missing path');
    }else{
        
        try{
            fs.readdir(path,function(err,data){

                if(err){

                    if(err){

                        callback(false,err);
                    }else{

                        callback(true,data)
                    }
                }
            })

        }catch(e){

            callback(false,e)
        }
    }
}

var writeJsonToFile = function(path,data,callback){

    if(!path){

        callback(false,'missing path');
        return;
    }else{

        try{
            
            fs.writeFile(filename,data,function(err){

                if(err){
                    
                    callback(false,'write file fail')
                }else{
                    
                    callback(true)
                }
            })
        }catch(e){

            callback(false,'write json fail');
        }
    }
}

module.exports.getContent       = getContent;
module.exports.delfile          = delfile;
module.exports.readDataFromFile = readDataFromFile;
module.exports.writeDataToFile  = writeDataToFile;
module.exports.appendDataToFile = appendDataToFile;
module.exports.writeJsonToFile  = writeJsonToFile;


