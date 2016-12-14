var http = require('http');

var filterHtmls = require('./filter');

var printDataCraw = require('./printDataCraw');

global.url = 'http://www.qdfuns.com/';

http.get(url,function(res){ 
 
  var html = '';

  res.on('data',function(data){ 

    html += data

  })

  res.on('end',function(){ 
     
    var crawData = filterHtmls.filterHtmls(html);

    printDataCraw.printDataCraw(crawData);

  })

}).on('error',function(){ 

    console.log('程序执行发生错误')
})
