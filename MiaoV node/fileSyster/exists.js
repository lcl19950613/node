/**
 * Created by Anikin on 2016/5/14.
 */
var fs = require('fs');
/*
fs.exists(path, callback)  老版本，最好不要用这个
判断文件是否存在，回调函数参数是 bool 值。例如：*/
 fs.exists('2.txt', function (exists) {
   console.log(exists ? "it's there" : "no passwd!");
 });

// fs.existsSync(path) 同步版本，返回布尔值