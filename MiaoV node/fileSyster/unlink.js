/**
 * Created by Anikin on 2016/5/14.
 */
var fs =require('fs');
/* 文件的删除操作
fs.unlink(path, callback)
   异步函数 unlink(2)。 回调函数只有一个参数：可能出现的异常.
fs.unlinkSync(path)
   同步函数 unlink(2)。 返回 undefined。*/
fs.unlink('3.txt',function(err){
  console.log(err ? '删除失败':'删除失败');
});