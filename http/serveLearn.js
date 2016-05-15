/**
 * Created by Anikin on 2016/5/15.
 */
var http = require('http');
/*
 2：server.listen(port[, hostname][, backlog][, callback])
 3：response.writeHead(statusCode, [reasonPhrase], [headers])
 response.setHeader("Content-Type", "text/html");
   是告诉客户端，发送的数据类型是 html的文本类型
 text/plain:  是发送给客户端的是纯文本的数据
 但是不管怎么样方发送给服务器的数据都是一样的。
 头信息就是在交互过程中的一些额外数据，是约定好的，也可以添加一些自定义的东西。编码，类型。

 // 当正文和多有的头信息发送完成以后，告诉服务器发送已经完成，必须放在write之后调用。
*/
/*API 按照顺序学习*/
//1: 状态码，是http下面最直接的一个方法。
var Statuscode = http.STATUS_CODES;
//console.log( Statuscode );
//console.log(Statuscode['403']);

//2;http.createServer([requestListener]) 返回的是一个服务器的对象
// requestListener 是一个函数,它将会自动加入到 'request' 事件的监听队列.

/*var server = http.createServer(function(res,req){
});*/
 //3 response.writeHead(statusCode, [reasonPhrase], [headers]) 向请求恢复响应头
 var server = http.createServer();
 server.on('error',function(err){
  console.log('发生了错误，该错误主要是'+err);
 });
 server.on('listening',function(){
  console.log('正在开启监控中...');
 });
server.on('request',function(req,res){
   console.log('有客户端请求了');
   console.log(req);
   //res.setHeader('Content-Type', 'text/html');
   res.writeHead(200, 'miaov', {
        'content-type' : 'text/html;charset=utf-8'
    });
   res.end('服务器顺利开启成功...');
});

// server.listen(port, [hostname], [backlog], [callback]),是异步的函数
server.listen(8080,'127.0.0.1');


































