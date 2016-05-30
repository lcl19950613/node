/**
 * Created by Administrator on 2016/5/30 0030.
 */
var querystring = require('querystring');
var info = {
    name: 'anikin',
    age: 23,
    something:['qiu','yan','long']
};

// 讲一个对象序列化为query  string
var res = querystring.stringify(info);

console.log( res );

// 反序列化
console.log( querystring.parse(res) );

var  str = '李四';
var encodes = querystring.escape(str);
console.log( encodes );
console.log( querystring.unescape(encodes) );