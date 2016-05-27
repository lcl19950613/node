/**
 * Created by Anikin on 2016/5/14.
 */
var fs = require('fs');
/*
fs.rename(oldPath, newPath, callback)
   异步函数 rename(2)。回调函数只有一个参数：可能出现的异常。
fs.renameSync(oldPath, newPath)
   同步函数 rename(2)。 返回 undefined。
*/
  fs.rename('3.txt','3.txt',function(err){
    console.log(err?'创建成功':'创建失败');
  });
