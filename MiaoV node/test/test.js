/**
 * Created by Anikin on 2016/5/7.
 */

var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

var anikin = {};

anikin.showname =function(){
      console.log('my name is aninkin');
}

anikin.showage = function(){
   console.log('my age is 23');
}

life.addListener('myEvent', anikin.showname);
life.addListener('myEvent', anikin.showage);

life.emit('myEvent');

console.log( 'hello world' );
//console.log( process );

// 当前文件被解析过后的绝对地址
console.log( __filename);

// 模块加载系统 requie('');

// 事件练习

