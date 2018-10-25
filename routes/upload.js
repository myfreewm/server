
var express   =   require('express');

var multer    =   require('multer');

var path      =   require('path');

var dataConf  =   require('../config/dataconf');

// 路由实例化
var router     = express.Router();

var targetPath = path.join(__dirname, '../public/data/images/');

var htmlPath   = path.join(__dirname, '../public/');

var upload     = multer({dest: targetPath});

// multer custom 
// 设置图片的上传姓名，以文件原始姓名为据

var storage = multer.diskStorage({

    destination : function(req, file, cb){

        cb(null, targetPath);
    },
    filename    : function(req, file, cb){

        console.log(file);
        
        cb(null, file.originalname);
    } 

})

var cutomeUpload = multer({storage: storage});

// routes config

router.get('/', function(req, res, next){
    
    res.redirect( 'form.html' );

})

router.post('/single', upload.single('logo'), function(req, res, next){
    
    res.send('upload single image is success');
})

router.post('/custom', cutomeUpload.single('image'), function(req, res, next){
    
    res.send('upload cutome is success');
})

router.post('/double', cutomeUpload.array('mul', 2), function(req, res, next){

    res.send('upload double is success');
})

module.exports = router;

