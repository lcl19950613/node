/**
 * Created by Anikin on 2016/6/4.
 */

// 该方法是 String 的静态方法，字符串中的每个字符都由单独的数字 Unicode 编码指定
console.log(String.fromCharCode(72,69,76,76,79));
var c1 = new Buffer('anikin','utf-8');

console.log(c1);
for(var i=0; i<c1.length; i++){
    console.log( c1[i]+'***'+String.fromCharCode(c1[i]) )
}

// 衍生  String 中的一些常用的其他的方

// charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
// 方法 charCodeAt() 与 charAt() 方法执行的操作相似，只不过前者返回的是位于指定位置的字符的编码，而后者返回的是字符子串

var str = 'anikina';
// 返回的是首次出现的位置的值
consoleIndex(str,'k');
consoleIndex(str,'a');
consoleIndex(str,'i');


function consoleIndex(str,n){
    console.log( n+'的位置是：'+ str.indexOf(n)  );
    console.log( n+'的Unicode的编码：'+ str.charCodeAt( str.indexOf(n) ) );
}




