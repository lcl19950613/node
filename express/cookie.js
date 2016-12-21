/**
 * Created by qiuyanlong on 2016/12/21 0021.
 */
// express_cookie.js 文件
var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function(req, res) {
    console.log("Cookies: ", req.cookies)
})
console.log('connecting...')
app.listen(8083)