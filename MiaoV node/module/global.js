/**
 * Created by Anikin on 2016/5/7.
 */
// gloabl  全局对象的学习

console.log(__dirname);    // 文件夹的名称  这两个属性都不是全局的，是模块作用域下面
console.log(__filename );  // 绝对路径
var d = new Date();

setTimeout(function(){

  console.log('今天是'+ d.getFullYear()+' 年'+ (d.getMonth()+1) + '月'+ d.getDate()+ '日' + d.getHours()+ ":"+ d.getMinutes()+ ':'+ d.getSeconds() );

},1000);


//process
 //console.log(global.process);
console.log( EventEmitter)