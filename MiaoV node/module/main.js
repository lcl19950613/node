/**
 * Created by Anikin on 2016/5/7.
 */
var res = require('./require.js');  // 这个方法有个返回值，就是这个加载模块上面挂载的数据

/*
  node 中的模块加载机制
    1： 路径问题： 可以是相对的，或者是绝对的路径
    2： 相对路径： 需要写成： './module.js';
    3:  加载node的核心模块的写法： 'module.js';
    4:  查找机制： 首先会按照加载的模块名称查找，如果没有找到则会在后面加上.js的后缀进行查找
        如果还没有找到，则会在后面加上.json的后缀查找
        如果还没有找到，则会在后面加上.node的后缀查找
    文件名称->.js->.json->.node

    module ：保存提供和当前模块有关的一些信息
    在这个module对象，有一个子对象，exports对象
    我们可以通过这个对象把一个模块中的局部变量对象进行提供访问

    在模块作用域内还有一个内置对象，exports == module.exports 指向的是同一个地址
    尽量不要修改这个两个对的指引关系，尽量挂载，不要重写。
*/

// 查看这个模块下面的module对象
   console.log( res );
   console.log( module );
























