/**
 * Created by Administrator on 2016/12/13 0013.
 */
  var http = require('http');

  var querystring = require('querystring');

  var url="http://www.imooc.com:80/course/video/mid/8837";

  var postData = querystring.stringify({

    'content': '这个鸡很激动',

    'uid':348

  });
  
  var options = {

    hostname: 'http://www.imooc.com/',

    path: '/course/docomment',

    method: 'POST',

     headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8,en;q=0.6',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=219d05d6-afb3-4363-823a-251688026ffa; imooc_isnew_ct=1479445800; loginstate=1; apsid=AxODU1YzFhZWRlZWQ4YWJhNTI5MWM1YTEwMjRmZTYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjIzMjg2OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4NzcxNDgxNzFAcXEuY29tAAAAAAAAAAAAAAAAAAAAAGVjYTEwYjFhM2QxNjU0NjM3MzQ3YzZlNGVlZDA5NDdjw40uWMONLlg%3DNz; last_login_username=877148171%40qq.com; PHPSESSID=dg6raqav5olib9l3ocemnh9lb7; imooc_isnew=2; cvde=58378c745d767-13; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1479778141,1479881232,1479950111,1480035090; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1480038929',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/comment/348',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
  };

console.log(1)

    var req = http.request(options,function(res){console.log(2)

         console.log('Status: '+ res.statusCode)
         console.log('headers:'+ JSON.stringify(res.headers))

         res.on('data',function( chunk ){
             // 传过来的数据是一个buff类型
             console.log( Buffer.isBuffer(chunk)  )
             console.log( typeof chunk )
         })

         res.on('end',function(){

           console.log('评论完毕')
         })

    });

    req.on('error',function(e){
      console.log('Error :  --> '+ e.message)
      console.log(e);
    })

    req.write(postData);

    req.end();






















