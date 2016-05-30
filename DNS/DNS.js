/**
 * Created by Administrator on 2016/5/30 0030.
 */
var dns = require('dns');
var dom = process.argv[1];

//console.log( dns );
  //DNS（Domain Name System，域名系统），因特网上作为域名和IP地址相互映射的一个分布式数据库，能够使用户更方便的访问互联网，而不用去记住能够被机器直接读取的IP数串


//1: 使用系统的底层特性，完成名字的解析，不需要进行网络通信
dns.lookup('www.baidu.com',function onLookup(err,addressses,family){

  console.log('addresses: ', addressses);
  console.log(family);
  console.log(err);
});

dns.lookup('www.google.com',function onLookup(err,addressses){

    console.log('addresses: ', addressses);

});


// 2； 使用网络进行dns的解析 dns.resolve();

var types = ['A','AAAA','MX','TXT','SRV','PTR','NS','CNAME'];

var handler = function(type)
{
    try{
        dns.resolve(dom,type,function(err,address){
            if(!err)
                console.log(type,address);
            else
                console.log(type,err);
        });
    }catch(exp)
    {
        console.log('unsupport method');
    }
};

types.forEach(handler);


