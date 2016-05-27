/**
 * Created by Anikin on 2016/5/14.
 */
/*
fs.mkdir(path[, mode], callback)创建文件夹--rmdir()  删除文件夹
异步函数 mkdir(2)。 回调函数只有一个参数：可能出现的异常. mode 默认s to 0777.
fs.mkdirSync(path[, mode])
同步函数 mkdir(2)。 返回 undefined。*/

var fs = require('fs');
fs.mkdir('./creater',function(){
  console.log(arguments);
});
/*
fs.rmdir('./creater',function(){
  console.log(arguments);
});*/
