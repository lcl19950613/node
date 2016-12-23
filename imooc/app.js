/**
 * Created by qiuyanlong on 2016/12/23 0023.
 *
 *  入口文件
 */

  var express = require('express');
  var port = process.env.PORT||3000;
  var app = express();

  app.set('views','./views');
  app.set('view engine','jade');
  app.listen( port );

  console.log('imooc started on port '+ port);

  // index  首页
  app.get('/',function(req,res){

    res.render('index',{
      title: 'index 首页'
    })

  });

  // detail page
  app.get('/movie/:id',function(req,res){

    res.render('detail',{
      title: 'datail 详情页'
    })

  });

  // admin page
  app.get('/admin/movie',function(req,res){

      res.render('admin',{
        title: 'admin  后台管理页'
      })

  });

  // admin list
  app.get('/admin/list',function(req,res){

      res.render('list',{
          title: 'list  后台管理详情页'
      })

  });











