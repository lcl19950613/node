/**
 * Created by Anikin on 2016/5/14.
 */
/*
要以读写的方式来操作文件: r+
fs.write(fd, buffer, offset, length[, position], callback)
将 buffer 写到 fd指定的文件里。
参数 offset 和 length 确定写哪个部分的缓存。
参数 position 是要写入的文件位置。如果 typeof position !== 'number'，将会在当前位置写入。参见 pwrite(2)。
回调函数有三个参数 (err, written, buffer)，written 指定 buffer的多少字节用来写。
注意，如果 fs.write 的回调还没执行，就多次调用 fs.write ，这样很不安全。因此，推荐使用 fs.createWriteStream。*/
var fs = require('fs');

fs.open('1.txt','r+', function(err,fd){

   if(err) throw err;
   // 1.这种写法是不需要buffer对象来操作的，比较简单。
   //fs.write(fd, '1232',9,'utf-8');

    var bf1 = new Buffer('rose                  ');
    fs.write(fd,bf1,0,5,13,function(){
      console.log( arguments );
    })
    fs.close(fd);
});


