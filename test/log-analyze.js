/**
 * description  : 对每天的日志信息进行分析，抽出请求到达时间
 * author       : jorden
 * data         : 2018-10-24
 * */


var fs   = require('fs');

var path = require('path');

var time = require('./../common/time');

// get target value
var target = path.join(__dirname, '../logs/' + time.getCurrentDate() + 'log.log');

var timeContainer = []; 
// save file data 
var saveFiles = null;

fs.readFile(target,'utf8',function(err, data){

    if(err){

        console.log('读取日志文件失败');
    }else{

        saveFiles = data;
        analyze(saveFiles);
    }
})

// 数据分析
function analyze(data){

   var container = []; 
   var tempArr = data.split('\n');
   
   for(var i = 0; i<tempArr.length;i++){

        var tempobj = {
           
           id:i,
           times:(tempArr[i].split(' ')[3]+'ms').replace('\u001b[0m','')
        }
        
        timeContainer.push(parseFloat(tempobj.times.replace('ms','')));
        container.push(tempobj);
   }
   
   findMaxFive(timeContainer);
}

/**
 * description:找出最大的五个数
 * params data -> array
 * return array
 * */ 

function findMaxFive(data){
    
    var result = [];
    
    for(var i = 0; i < 5; i++){
        
        result.push(findMax(data));
    }

    console.log(result);
}

/**
 * description:找出最大的数
 * params -> array
 * return number
 *
 * */ 

function findMax(data){
    

    var max = data[0];
    var idx = 0;

    for(var i = 1; i < data.length; i++){
       
        if(data[i] > max){

            max = data[i];
            idx = i;
        }

    }

    data.splice(idx,1);

    return max;
}

