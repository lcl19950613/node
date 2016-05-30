/**
 * Created by Administrator on 2016/5/30 0030.
 */
var http = require('http');

// 返回的是所有的http的请求方法；
var methods = http.METHODS;

for(var i=0; i<methods.length; i++){
 // console.log('method '+i+' is '+ methods[i] );
}

// 返回的是所有错误的http状态码
var state_code = http.STATUS_CODES;
if( state_code[404] === 'Not Found'){
    console.log('你所要找的页面已经被狗吃掉了');
}


//http.creatSever()//返回的是一个服务器的对象
http.createServer(function (request, response) {

     console.log(request);
    response.writeHead(200,'anikin', {'Content-Type': 'text/plain'});
    //response.write('Hello nodejs');
    response.end('Listening...');

}).listen(1337, '127.0.0.1',()=>function(){
    console.log('Server running at http://127.0.0.1:1337/');
});

