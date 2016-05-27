/**
 * Created by Anikin on 2016/5/14.
 */
/*
fs.readdir(path, callback)异步函数 readdir(3)。 读取文件夹的内容。回调有2个参数 (err, files)files 是文件夹里除了名字为，'.'和'..'`之外的所有文件名。

fs.readdirSync(path)同步函数 readdir(3)。 返回除了文件名为 '.' 和 '..'之外的所有文件.*/
var fs = require('fs');
var aa = fs.readdir('../fileSyster',function(err,fileList){
  //console.log(fileList);
    fileList.forEach(function(info,ind){
       fs.stat(info,function(err,dali){
           //console.log(dali.mode);
           if(dali.mode == 16822){
               console.log('【文件夹】'+info);
           }else if(dali.mode == 33206){
               console.log('【文件】'+info);
           }else{
               console.log('【其他】'+info);
           }

       });
    });
});

// 也可以使用递归的方法生成文件管理系统