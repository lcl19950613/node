/**
 * Created by Administrator on 2016/12/14 0014.
 */

 var https = require('https');

 var fs = require('fs');

 var options = {

     key: fs.readFileSync('ssh_key.pem'),
     cert:fs.readFileSync('ssh_cert.pem') //  key跟证书

 };

  https.createServer(options,function( req,res ){

      res.writeHead(200)
      res.on('Hello world')

  }).listen(8090);
