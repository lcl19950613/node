/**
 * Created by Anikin on 2016/5/14.
 */
var fs = require('fs');
/* 向一个指定的文件写入数据，如果文件不存在则自动创建，如果存在则覆盖掉原来的内容
fs.writeFile(filename, data[, options], callback)
    filename {String}
    data {String | Buffer} data 可以是缓存或者字符串。
    options {Object}
    encoding {String | Null} 默认 = 'utf8'
    mode {Number} 默认 = 438 (aka 0666 in Octal)
    flag {String} 默认 = 'w'
    callback {Function}
异步写文件，如果文件已经存在则替换。如果参数 data 是 buffer，会忽略参数 encoding。默认值是 'utf8'。*/
var filename = '3.txt';
var content = 'this is auto createFile and this contcent is hi';
fs.writeFile('2.txt',content,function(){
  console.log(arguments);
});

// fs.readFileSync(filename[options]) 同步的版本
/*fs.appendFile(filename, data[, options], callback)  追加插入的操作，如果不存在则自动创建
filename {String}
data {String | Buffer}
options {Object}
encoding {String | Null} 默认 = 'utf8'
mode {Number} 默认 = 438 (aka 0666 in Octal)
flag {String} 默认 = 'a'
callback {Function}
异步的给文件添加数据，如果文件不存在，就创建一个。 data 可以是缓存或者字符串*/

fs.exists(filename, function (exists) {
   if(!exists){
       console.log('文件不存在，要准备创建了');
       fs.writeFile(filename,content,function(){
           console.log('文件以及写入成功');
       })
   }else{
       fs.appendFile(filename,'-addContent',function(){
           console.log('添加内容成功');
       });
   }
});













