
 var  http = require('http');
 var Promise = require('bluebird'); // 高级版本是不需要引入这个文件的，自身集成了promise这个模块.

function preGetquestion(url){
    return new Promise(function( resolve,reject ){
        console.info('正在爬取 '+ url +' 的数据');
        http.get(url,function(res){

            var html = '';
            res.on('data',function(data){
                html += data;
            });
            res.on('end',function(){
                resolve(html);
                console.info('爬取数据结束,内容全部写入到了data.json文件中');
            })
        }).on('error',function(e){

            reject(e);
            console.log('程序出现错误：'+ e)
        })
    })
}

 exports.preGetquestion = preGetquestion;
