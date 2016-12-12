 /**
 * Created by Anikin on 2016/5/8.
 
/*
   buf.length    //buf长度，就是在内存中存放的大小。
*  buf.write()
*  buf.toString()
*  buf.toJson()
*  buf1.compare(buf2) 返回值是-1 0 1
*  buf1.copy(buf2)  将buf1拷贝到buf2中
*  buf1.slice(start,end)
*
*  Buffer.isBuffer(obj)
*  Buffer.concat([buf1,buf2])
*  Buffer.isEncoding(encoding)
*  Buffer.byteLength(string, [encoding])
*
* */
 */
var a  = new Buffer(10);  //分配了10长度的大小，其长度是固定的，不能更改。

var b = new Buffer(['a',2,3,4]);  // 一旦创建其长度就再不能改变。

var c = new Buffer('anikin','utf-8');

console.log(c.length+'||'+c);  // 字节长度并非字符串长度，英文二者是一样的，中文的话就不一样。

// 验证
 for( var i=0; i< c.length; i++ ){

     console.log( c[i].toString(16) + '==>'+ String.fromCharCode( c[i] )  );
 }

// 字节长度，就是在内存中存放的大小。
var str1 = '张三';

var d = new Buffer(str1,'utf-8');

console.log(d.length);

/*
* 方法1：buf.write();  buf.write(string, [offset], [length], [encoding])
 *        [offset]: 开始写入的位置
 *        [length]： 写入对象中的长度
 *        [encoding]： 默认的是utf-8
 *
 *    2: buf.toString([encoding], [start], [end])  将buffeer转换为string类型的
 *
 *    3: buf.toJSON() 将buffer转化为json对象的形式
 *
 *    4: buf.slice([start], [end])  片段的截图操作，修改后的buffer地址指向跟原先的buffer地址是同一个地址
 *
 *    5: buf.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd]) buff对象的拷贝，不影响原来的buffer对象
 *
  *   targetBuffer: 需要拷贝的buff对象
  *
  *   6： 静态方法 Buffer.isEncoding(encoding)
  *
  *   7:  判断Buffer.isBuffer(obj)
  *
  *   8:  直接判断字节长度，不用转化toSting(): Buffer.byteLength(string, [encoding])
  *       不同的编码占据的字节长度是不一样的。
  *
  *   9： Buffer.concat(list, [totalLength])
  *       list {Array}数组类型，Buffer数组，用于被连接。
  *
**/

var str2 = 'anikin';
var e = new Buffer(6);
var res = e.write(str2,1,2,'utf-8');
console.log('写入的结果是：'+e);



var bf = new Buffer('miaov');
console.log('tostring----'+bf.toString());
console.log('tostring----'+bf.toString('utf-8',1,4));
console.log(bf.toJSON() );


var h = new Buffer('anikin');
var g = h.slice(2);
console.log('slice--'+h);
console.log('slice--'+g);


var j = new Buffer(10);
var k = new Buffer(6);
j.copy(k);
console.log(j);
console.log(k);


console.log( Buffer.isEncoding('utf-8'));
console.log( Buffer.isBuffer(j) );
console.log( Buffer.byteLength(str1) );



// IO操作其实返回的参数也是buffer对象
process.stdout.write('请输入你想要的数字:');
process.stdin.resume();
process.stdin.on('data',function(chunk){

   //如果这个地方的chunk是跟字符串进行的是拼接的话，就不需要进行toString()的转换,会在内部进行转换的
   // console.log(chunk.toString());
    console.log('你输入的数字是：'+ chunk );
});





