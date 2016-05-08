var EventEmitter = require('events').EventEmitter;

var life  = new EventEmitter();

// addEventListener == on;
// 官方建议对一个事件设置最多不要超过十个监听器

// 可以手动的设置最大的监听数量，就不会再报错  
life.setMaxListeners(11);

function myName(who){
  console.log('Thats '+ who + ' me---1');
}
life.on('myEvent',myName);

// 移除事件最好是个具名函数，匿名函数的话是不行的
life.removeListener('myEvent',myName);

life.on('myEvent',function(who){ 
  console.log('Thats '+ who + ' me----2');
});

life.on('myEvent',function(who){ 
  console.log('Thats '+ who + ' me----3');
});

life.on('myEvent',function(who){ 
  console.log('Thats '+ who + ' me----4');
});

life.on('myEvent',function(who){ 
  console.log('Thats '+ who + ' me---5');
});

life.on('myAge',function(who){ 
  console.log('My age is  '+ who + ' me---5');
});

// 选择批量的移除  需要传递具体的函数名称来过滤需要删除的事件
life.removeAllListeners('myEvent');

 // 触发事件
var hasConfortListener = life.emit('myEvent','anikin');   // 它有一个返回值，true表示被监听过，否则表示是没有被监听过的  
var hasAgetListener = life.emit('myAge','23');
console.log( hasConfortListener );


// 两种获得事件监听得数量方法
console.log( life.listeners('myEvent').length );
console.log(EventEmitter.listenerCount(life,'myEvent') );

