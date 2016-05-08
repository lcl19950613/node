/**
 * Created by Anikin on 2016/5/7.
 */
// 定义这个模块的属性很方法

 var a = [1,2,3];

 function showName(name,age){
    this.name  = name;
    this.age = age;
 }

 // 进行数据的挂载
 module.exports.a = a;
 module.exports.name = 'anikin';
 module.exports.showName = showName;