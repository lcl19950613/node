/**
 * Created by Administrator on 2016/12/15 0015.
 *
 *  base64位图片使用方式： data:image/png;base64,+ 64位的图片编码编码
 *
 *
 */

  var fs = require('fs');

  fs.readFile('logo.png',function(err,buf_origin){

      if(err) console.log(err);

      console.log('isBuffer: ' + Buffer.isBuffer(buf_origin) )

      fs.writeFile('buf_logo.png',buf_origin,function(err){

          if(err) console.log(err);

      })

      var base64 = buf_origin.toString('base64');
      var decodedImage = new Buffer(base64, 'base64')
      console.log(Buffer.compare(buf_origin, decodedImage))
      fs.writeFile('logo_decoded.png', decodedImage, function(err) {
          if (err) console.log(err)

      });
    console.log(decodedImage.toString('base64'))

  });

