
 /**
  * 实现对文件的压缩操作
  * readable.pipe(destination[, options])

       一个readable的流才会有pipe方法可以调用，pipe方法接收一个可写入的流对象作为pipe的目标就是在一个可读的流和可写的流之间建立
       一个通道，把readable中的数据写入destination中,pipe执行完后返回destination指定的流对象



 **/

  var fs = require('fs');

  var zlib = require('zlib');

  fs.createReadStream('output.txt')
    .pipe( zlib.createGzip() )
    .pipe( fs.createWriteStream( 'output.txt.gz' ));


  console.log('文件压缩完成');
