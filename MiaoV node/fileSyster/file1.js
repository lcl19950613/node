/**
 * Created by Anikin on 2016/5/14.
 */
 var fs = require('fs');
/*fs.open(path,flags,[mode],callback)
path: 要打开文件的路径
flags: 打开文件的方式  读/写
mode 设置发开文件的模式 读/写/执行 4/2/1
callback
err: 文件打开失败的错误保存在err里面，如果成功为err或者null
fd:  被打开的文件表示，和定时器*/

// fs.openSync(path, flags[, mode]) 同步操作
 var inner = fs.open('1.txt','r',function(err,fd){   // 异步的方式再操作
   if(err) throw err;
     console.log(fd);
 });
console.log(inner);   //  先与inner输出，异步的操作

var ouer = fs.openSync('1.txt','r');
console.log( ouer );


