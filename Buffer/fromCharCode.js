/**
 * Created by Anikin on 2016/6/4.
 */

// 该方法是 String 的静态方法，字符串中的每个字符都由单独的数字 Unicode 编码指定
console.log(String.fromCharCode(72,69,76,76,79));
console.log( String.fromCharCode(111) );
var c1 = new Buffer('anikin','utf-8');
for(var i=0; i<c1.length; i++){
    console.log( String.fromCharCode(c1[i]) )
}

// 衍生  String 中的一些常用的其他的方法








