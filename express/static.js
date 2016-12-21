/**
 * Created by qiuyanlong on 2016/12/21 0021.
 */
var express = require('express');
var app = express();

app.use(express.static('public'));

//app.use('/static', express.static('public'));

// http://127.0.0.1:8081/static/images/a.gif

// 不同的路径下面都可以访问，挂载到一个虚拟的地址进行访问

app.get('/', function (req, res) {
    res.send('Hello World');
});

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});

// http://127.0.0.1:8081/images/a.gif ok!