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
  var cookieParser = require('cookie-parser');
  var session = require('express-session');
  var mongoose = require('mongoose');
  var mongoStore = require('connect-mongo')(session); // 初始化 新版的express中不在 session单独提取出来了，因此需要传入的是session模块
  var dbUrl = 'mongodb://localhost:27017/movies';
  var logger = require('morgan');                      // 4.0版本以后 删除的api 采用插件的形式实现
  mongoose.Promise = global.Promise;
  mongoose.connect(dbUrl);
  mongoose.connection.on('open', function () {
    console.log('-----------数据库连接成功！------------');
  });


  app.set('views','./app/views/pages');
  app.set('view engine','jade');
  app.use(express.static(path.join(__dirname, 'public')));//静态文件配置的目录

  app.use(cookieParser());
  // 依赖于中间件cookie mongoStore存在了配置
  app.use(session({
     secret:'movies',
     resave: false,
     store: new mongoStore({
        url:dbUrl,
        collection:'sessions'      // 存到mongodb中名字叫做session
     }),
     saveUninitialized: true
  }));

  // 配置开发环境跟其他环境下 报错有关的一些配置 本地开发主要关心一些请求 类型 数据库查询 通过配置 在本地查看一些错误信息
  // 开发环境
  if('development' === app.get('env')){
        app.set('showStackError',true);           // 在屏幕上打印错误信息
        app.use(logger(':method :url :status'));  // 打印请求等 4.0版本移除了 需要引入插件
        // app.use(express.logger(':method :url  :status'))
        app.locals.pretty = true;                 // 输出的页面代码先美化
        mongoose.set('debug',true)
  }


  app.use(require('body-parser').urlencoded({extended: true}));
  app.locals.moment = require('moment');          // 调用的是本地的
  app.listen( port );
  console.log('imooc started on port '+ port);
  require('./config/route')(app);                 // 千万要放到最下面













