/**
 * Created by Anikin on 2016/5/14.
 */
    // 实现合并两个以上的文件系统 实时的监听在./Project/course下面文件的变化，如果是js文件则自动添加到js目录下面并且自动生成index.js的目录；
var fs = require('fs');
var filedir = './Project/course';

fs.watch(filedir,function(event, filename){
    // 这里不需要判断filename的存在与否，因为会涉及到删除文件之后被合并的文件也会被删除
    fs.readdir(filedir,function(err,dataList){;
        var res = [];
        dataList.forEach(function(ele,ind){

            //console.log(dataList);
               if(ele){
                 var info = fs.statSync(filedir+'/'+ele);
                 if(info.mode == 33206){
                     res.push(filedir+'/'+ele);
                 }
               }
        });
        console.log(res);
        // 读取存在数组中的文件到页面中
        var content = '';
        res.forEach(function(ele){
            var inner = fs.readFileSync(ele);
            content += inner.toString()+'\n';
        });
        console.log(content);
        fs.writeFileSync('./Project/js/index.js',content);
    });
});

