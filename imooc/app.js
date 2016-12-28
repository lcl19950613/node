/**
 * Created by qiuyanlong on 2016/12/23 0023.
 *
 *  入口文件
 *
 *  目录结构的划分： 所有的静态文件都放到public下面
 *  bower有个特性就是可以指定文件的地址，在 .bowerrc 文件中，之后用bower进行安装的时候，都会按照这个目录进行查找安装
 *
 *  版本锁定，生成配置文件
 */
  var express = require('express');
  var path = require('path'); // 页面地址管理
  var port = process.env.PORT||3001;
  var app = express();
  var mongoose = require('mongoose');
  var _ = require('underscore');
  var Movie = require('./models/movie'); //将模型也要加载进来
  var User = require('./models/user'); //将模型也要加载进来

  mongoose.Promise = global.Promise;
  mongoose.connect("mongodb://localhost:27017/movies");
  mongoose.connection.on('open', function () {
        console.log('-----------数据库连接成功！------------');
  });

  app.set('views','./views/pages');
  app.set('view engine','jade');
  app.use(express.static(path.join(__dirname, 'public')));//静态文件配置的目录
  app.use(require('body-parser').urlencoded({extended: true}));
  app.locals.moment = require('moment'); // 调用的是本地的
  app.listen( port );
  console.log('imooc started on port '+ port);

  // index  首页
  app.get('/',function(req,res){
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
  });

  // detail page
  app.get('/movie/:id',function(req,res){

      var id = req.params.id; // 在url中就能拿到这个参数中的id的值，然后就可以开始查询

      Movie.findById(id,function (err, movie) {
          if(err){
              console.log(err);
          }
          res.render('detail', {
              title: 'imooc ' + movie.title,
              movie: movie
          })
      })
  });

  // admin page
  app.get('/admin/movie',function(req,res){

      res.render('admin', {
          title: 'imooc 后台录入页',
          movie: {
              title: '',
              doctor: '',
              country: '',
              year: '',
              poster: '',
              flash: '',
              summary: '',
              language: ''
          }
      })

  });

  // admin list
  app.get('/admin/list',function(req,res){

      Movie.fetch(function (err, movies) {
          if(err){
              console.log(err);
          }
          res.render('list',{
              title:'imooc 列表页',
              movies: movies
          });
      });

  });

//admin update movie 更新这部电影
app.get('/admin/update/:id',function (req, res) {
    var id= req.params.id;

    // 如果id是存在的话，渲染表单，后台录入页面
    if (id) {
        Movie.findById(id, function (err,movie) {
            res.render('admin',{
                title:'imooc 后台更新页',
                movie:movie
            })

        })
    }

})


//admin post movie  从表单post过来的数据
app.post('/admin/movie/new',function (req, res) {
    var id = req.body.movie._id;
    var movieObj = req.body.movie;
    var _movie ;

    // 判断过来的数据是不是新的 id存在就说明这部电影已经在库里面存在了
    if(id!==undefined && id !== "" && id !== null){
        Movie.findById(id,function (err,movie) {
            if (err) {
                console.log(err);
            }
            // 来自抵坚库
            _movie = _.extend(movie, movieObj);
            _movie.save(function (err,movie) {
                if (err){
                    console.log(err);
                }
                // 保存成功了，就让页面重定向到movie这个
                res.redirect('/movie/' + movie._id)
            })
        })
    }else{

        // 这部电影是新加的
        _movie = new Movie({
            doctor:movieObj.doctor,
            title:movieObj.title,
            country:movieObj.country,
            language:movieObj.language,
            year:movieObj.year,
            poster:movieObj.poster,
            summary:movieObj.summary,
            flash:movieObj.flash
        });

        _movie.save(function (err,movie) {
            if (err){
                console.log(err);
            }

            res.redirect('/movie/' + movie._id)
        })
    }
});

// delete 处理删除的请求
app.delete('/admin/list',function(req,res){

     var id = req.query.id;
     if(id){
         Movie.remove({_id:id},function(err,movie){

            if(err){
                console.log(err)
                res.json({success:0})
            }else{
                res.json({success:1})
            }

         })
     }
});

// 用户注册 User user/sigup
app.post('/user/sigup',function(req,res){

     /* 三种拿到具体的参数信息的方式
         比如： /user/sigup/:id => req.params.id
               /user/sigup/111?id=23 => req.query.id
               req.body.id [post提交的信息都在body中]

         req.param('user') 也能拿到用户信息，但是使用稍微小心
      */
     var _user = req.body.user;


     // 注册字段的检测，mongo中是不允许有相同字段的用户进行注册的

     User.findOne({name:_user.name},function(err,user){

         if(err){
             console.log(err)
         }
         console.log(user);

         if(user){
             return res.redirect('/')
         }else{
             // 当前用户不存在的时候，避免用户名重复
             var user = new User(_user);
             user.save(function(err,user){
                 if(err){
                     console.log(err)
                 }
                 res.redirect('/admin/userlist')
             });
         }

     });




});

// 用户注册 admin list
app.get('/admin/userlist',function(req,res){
    User.fetch(function (err, users) {
        if(err){
            console.log(err);
        }
        res.render('userlist',{
            title:'用户列表项',
            users: users
        });
    });

});















