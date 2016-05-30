/**
 * Created by Administrator on 2016/5/30 0030.
 */
var  path = require('path');
     //console.log(path);

// 格式化双//  会自动替换为/  需要注意的 ./ ../
var normal = path.normalize('./dirname/desc//qiuyanlong/baoxian/index.html');
console.log( normal );

// path.join(a,b,c) 连接所有的参数成为一个合格的路径，必须是字符串0.8忽非字符串，之后的会抛出异常
var joinstring = path.join('/images','img','a.jpg');  // \images\img\a.jpg
console.log( joinstring );

// path.resolve(fome,to) 是将to参数解析为绝对路劲或者而进行cd的跳转
var res = path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile');
console.log(res);

console.log( path.resolve('/demo','images/1.jpg') );  //e:\demo\images\1.jpg 绝对路劲
console.log( path.resolve('test/js','jquery') ); // e:\gitR\node\path\test\js\jquery

// path.isAbsolute(); 判断是不是绝对的路径
var abstr = './js/jquery';
console.log( path.isAbsolute(abstr) );  // false
console.log( path.isAbsolute('deom/src/jquer.1.0.js') );  // false
console.log( path.isAbsolute('e:/demo/images/1.jpg') );  // true

console.log( __dirname ); // 文件夹的绝对路劲
console.log( __filename); // 文件的绝对路劲

// path.disname(p)  返回的p的绝对路径
console.log( path.dirname('/demo/images/1.jpg') );  // /demo/images

// path.basename  返回相对路劲的最后一部分
console.log( path.basename('/demo/images/1.jpg') );


// 返回最后一个文件的扩展名称
console.log( path.extname('/demo/images/1.jpg') );

// 返回路径字符串对象  ---path.formate()  跟这个刚好相反，是合成对象为一个路径字符串
console.log( path.parse(__dirname) );
