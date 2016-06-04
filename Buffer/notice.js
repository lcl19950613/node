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