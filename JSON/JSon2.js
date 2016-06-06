/**
 * Created by Anikin on 2016/6/5.
 */
/*

使用 JSON 解析器将 JSON 转换为 JavaScript 对象是更安全的做法。JSON 解析器只能识别 JSON 文本，而不会编译脚本。
在浏览器中，这提供了原生的 JSON 支持，而且 JSON 解析器的速度更快。
较新的浏览器和最新的 ECMAScript (JavaScript) 标准中均包含了原生的对 JSON 的支持*/

/* 对于较老的浏览器，可使用 JavaScript 库： https://github.com/douglascrockford/JSON-js*/

// JSON.parse(string);  // 接受一个string，转为json对象
// JSON.stringify(obj); // 从一个对象中解析出字符串的过称


var str = '{"name":"huangxiaojian","age":"23"}';
console.log( typeof JSON.parse(str) );

var  a = {a:1,b:2};
console.log( typeof JSON.stringify(a) );

var arr = ['anikin','jack','rose'];
console.log( typeof JSON.stringify(arr) );


