/**
 * Created by Anikin on 2016/6/4.
 */

/*
*  nodejS 对Unicode友好，但是很难处理二进制数据，在操作文件系统跟TCP流的时候需要操作字节流
*  Buffer 就是node提供的处理字节流的
*
*  在buffer的实例化中就存贮了原始的数据，buffer类似一个数组，一旦创建就不能修改，是内存的拷贝不是内存的共享
*/
var newBuff = new Buffer('anikin');
newBuff[6]='r';
console.log( newBuff.length);

/*
* Buffer.isEncoding(string)  用来测试给定的编码字符串
*
*/

function isEncodeWidth(str){
    return Buffer.isEncoding(str);
}


console.log( isEncodeWidth('utf-8') );
console.log( isEncodeWidth('base64') );

/*
* Buffer.isBuffer(obj)
**/

function isBufferObj(obj){
    return Buffer.isBuffer(obj);
}

console.log( isBufferObj(newBuff) );

/*
* Buffer.byteLength(str)  跟str.length 不一样，这个返回的只是字符串的长度
**/
console.log( Buffer.byteLength('anikin','utf8') );

/*
* Buffer.concat(list,[totalLength])
* */
var arr1 = new Buffer([1,2,3]);
var arr2 = new Buffer(['a','b','c']);


/*Buffer转字符串;
buf.toString([encoding], [start], [end]);*/

 var bfs = new Buffer('aasdas');
 console.log( showStringBuffer(bfs) );

// 实现简单的封装buffer转为字符串;
function showStringBuffer(bfs){
  var res = [];
  if( Buffer.byteLength(bfs)!=0 && Buffer.byteLength(bfs)>0){
    for(var i=0; i<bfs.length; i++){
      res.push( String.fromCharCode(bfs[i].toString()) )
    }
    return res.join('');
  }else{
      return '请检查buffer object';
  }
}

/*
*  buf.toJSON()
* */
var bfs2 = new Buffer('aninki');
console.log( bfs2.toJSON() );












