/**
 * Created by Anikin on 2016/5/14.
 */
var fs = require('fs');

fs.open('1.txt','r',function(err,fd){

    if(err) throw err;

    /* 也是异步的读取
    fs.read(fd, buffer, offset, length, position, callback);
    读取 fd指定文件的数据。
    buffer 是缓冲区，数据将会写入到这里.
    offset 在buffer中开始从第几位存放写入读取过来的东西 写入的偏移量
    length 需要读的文件长度
    position 读取的文件起始位置，如果是 position 是 null， 将会从当前位置读。
    回调函数有3个参数, (err, bytesRead, buffer). */
  var buffer = new Buffer(20);  // 将读取过来的东西存放到buffer里面

  fs.read(fd,buffer,0,3,null,function(err, bytesRead, buffer){
     console.log(bytesRead);
     console.log( buffer );
     //新的buffer对象跟之前的是一样的
  })
});


