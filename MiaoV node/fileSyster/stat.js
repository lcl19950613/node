/**
 * Created by Anikin on 2016/5/14.
 */
var fs = require('fs');
/*包含文件的所有信息
fs.stat(path, callback)异步函数回调函数有两个参数： (err, stats) ，其中 stats 是一个 fs.Stats 对象 详情请参考 fs.Stats。

fs.lstat(path, callback)异步函数 回调函数有两个参数： (err, stats) ，其中 stats 是一个 fs.Stats 对象。 lstat() 与 stat() 基本相同, 区别在于，如果 path 是链接，读取的是链接本身，而不是它所链接到的文件。*/

  fs.stat('creater',function(){
      console.log(arguments);
  })















