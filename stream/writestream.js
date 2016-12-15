/**
 * Created by Administrator on 2016/12/15 0015.
 */

    var fs = require('fs');

    var data ='this is test text';

    var writeStream = fs.createWriteStream('output.txt');

    writeStream.write(data,'UTF8');

    // 标记文件末尾
    writeStream.end();

    // 处理流事件 --> data, end, and error
    writeStream.on('finish', function() {
        console.log("写入完成。");
    });

    writeStream.on('error', function(err){
        console.log(err.stack);
    });

    console.log("程序执行完毕");
