/**
 * Created by Anikin on 2016/5/14.
 */
var fs = require('fs');
/*
1: fs.readSync(fd, buffer, offset, length, position)  提供的同步的版本
2: fs.readFile(filename[, options], callback)
    filename {String}
    options {Object}
    encoding {String | Null} 默认 = null
    flag {String} 默认 = 'r'
    callback {Function}
*/
var filename = '3.txt';
fs.readFile(filename,function(err,data){
  // 是buffer对象输出需要转换为字符串
  if(err) throw err;
  console.log('读取成功，内容是 :'+ data.toString() );
});