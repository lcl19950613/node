/**
 * Created by qiuyanlong on 2016/12/21 0021.
 */

 var http =  require('http');

 var express = require('express');

 var app = express();

 app.get('/',function(req,res){

    res.send('Hellow orld')

});

  var server = app.listen(8081,function(){

     var host = server.address().address;
     var port = server.address().port;

      console.log("应用实例，访问地址为 http://%s:%s", host, port)

  });




