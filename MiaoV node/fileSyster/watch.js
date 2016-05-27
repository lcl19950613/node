/**
 * Created by Anikin on 2016/5/14.
 */
/*
fs.watch(filename[, options][, listener]) 这个事件不太稳定
 回调函数有2个参数 (event, filename)。event 是 rename 或 change。filename 是触发事件的文件名
 所以不要假设回调函数中 filename 参数有效，要在代码里添加一些为空的逻辑判断。
*/
var fs = require('fs');
var filename = '3.txt';
fs.watch(filename,function(event,filename){
  console.log(event);
  if( filename ){
    console.log('触发了事件：'+event+"--"+filename);
  }else{
      console.log('.......');
  }

});
