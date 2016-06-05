/**
    * Created by Anikin on 2016/6/5.
*/
var txt = '{ "employees" : [' +
    '{ "firstName":"Bill" , "lastName":"Gates" },' +
    '{ "firstName":"George" , "lastName":"Bush" },' +
    '{ "firstName":"Thomas" , "lastName":"Carter" } ]}';

console.log( typeof txt );

/*
eval() 函数使用的是 JavaScript 编译器，可解析 JSON 文本，然后生成 JavaScript 对象。必须把文本包围在括号中，这样才能避免语法错误：*/

var obj = eval ("(" + txt + ")");
console.log(obj);

 /*该方法只接受原始字符串作为参数，如果 string 参数不是原始字符串，那么该方法将不作任何改变地返回。因此请不要为 eval() 函数传递 String 对象来作为参数
*/

var str = " x=10;y=20;console.log('答案是：'+x*y) ";
eval(str);





