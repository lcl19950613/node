/**
 * Created by Administrator on 2016/12/15 0015.
 */

 var fs = require('fs');

 exports.printHtml = function(coursesData){

     var outputFilename = 'data.json';  // 在当前文件夹下面自动生成一个叫你文件夹
     fs.writeFile(outputFilename, JSON.stringify(coursesData, null, 4), function(err) {
         if(err) {
             console.log(err);
         } else {
             console.log("JSON saved to " + outputFilename);
         }
     });

 };
