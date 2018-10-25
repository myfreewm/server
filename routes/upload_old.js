
var express   = require('express');

var multer    = require('multer');

var fs        = require('fs');




var dataConf = require('../config/dataconf');

var time     = require('../common/time');

var logger   = require('../common/logger');

var router   = express.Router();

var upload   = multer({dest:dataConf['tempPath']});


router.post('/photo',upload.single('image'),function(req,res,next){

    var file              = req.file,
        _page             = req.body.page,
        _callbackhtml     = req.body.refreshhtml,
        _elename          = req.body.photoname,
        _source_path      = file.path,
        _target_path      = dataConf["imagePath"] + '/' + _page + '/' + _elename;

    
    if(!_page){
        logger.error('[error] - ' + time.getCurrentTime() + 'upload.file - no file ');
        res.redirect(_callbackhtml);
        return;
    }else{
        logger.info('[info] - ' +time.getCurrentTime() + '-upload.file - {page:' + _page + ',callbackhtml:' + _callbackhtml + ',elename:' + elename + ',filePath' + file.path + ',fileSize:'+file.size + '}');
    }
    
    // 移动文件
        fs.rename(_source_path,_target_path,function(err){
            if(err){

                logger.error('[error] - ' + time.getCurrentTime() + '- upload.rename - ' + err);
                throw err
            }else{

                logger.info('[success] - ' + time.getCurrentTime() + '- upload.rename - ' + _source_path + '_' + _target_path);
            }
        })

    // 删除临时文件夹文件
        
        fs.unlink(_source_path,function(err){

            if(err){

                logger.error('[error] - ' + time.getCurrentTime() + 'upload.delete -' + err)
            }else{

                logger.info('[success] - ' + time.getCurrentTime() + '- upload.delete' + _source_path + ' - ' + _target_path)
            }
        })

        res.redirect(_callbackhtml);

})

module.exports = router;
