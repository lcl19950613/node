/**
 * Created by Anikin on 2016/6/5.
 */

/*JSON 最常见的用法之一，是从 web 服务器上读取 JSON 数据（作为文件或作为 HttpRequest），将 JSON 数据转换为 JavaScript 对象，然后在网页中使用该数据 */
var datas = {
    "employees": [
        { "firstName":"John" , "lastName":"Doe" },
        { "firstName":"Anna" , "lastName":"Smith" },
        { "firstName":"Peter" , "lastName":"Jones" }
    ]
};

console.log( datas );

var employees = [
    { "firstName":"Bill" , "lastName":"Gates" },
    { "firstName":"George" , "lastName":"Bush" },
    { "firstName":"Thomas" , "lastName": "Carter" }
];

console.log(employees[0].lastName);

// 修改JSON的值是通过重新赋值实现的
employees[0].lastName = "Qiu yan long";

console.log(employees[0].lastName);













