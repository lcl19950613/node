/**
 * Created by qiuyanlong on 2016/12/29 0029.
 * 专门负责跟首页通信的部分
 */

 var Movie = require('../models/movie'); //将模型也要加载进来

 exports.index = function(req,res){

     //console.log(req.session.user);
     Movie.fetch(function (err, movies) {
         if(err){
             console.log(err);
         }
         // 渲染首页这个模板
         res.render('index',{
             title:'imooc 首页',
             movies: movies
         });
     })

 };
