/**
 * Created by qiuyanlong on 2016/12/29 0029.
 * 专门处理路由先关的部分 最新的版本已经自动集成了这个功能
 *
 *  express init 也会自动搭建，不需要这样子手动搭建
 *
 *  必须细化项目结构 关于控制的业务
 *
 */

var Index = require('../app/controller/index'); //将模型也要加载进来

var User = require('../app/controller/user');

var Movie = require('../app/controller/movie');

var Comment = require('../app/controller/comment');


module.exports = function(app){

    // pre handle user
    app.use(function(req,res,next){

        // 放到本地变量里面去，渲染本地变量的jade模板
        var _user = req.session.user;

        app.locals.user = _user;

        next();

    });

    // index  首页
    app.get('/',Index.index);

    // 用户注册 User user/sigup
    app.post('/user/sigup',User.signup);
    app.post('/user/signin',User.signin);
    app.get('/user/signin',User.showSignin);
    app.get('/user/signup',User.showSignup);
    app.get('/logout',User.logout);
    app.get('/user/userlist', User.signinRequired, User.adminRequired, User.list);

    // Movie
    app.get('/movie/:id',Movie.detail);
    app.get('/admin/movie/new',User.signinRequired, User.adminRequired,Movie.new);
    app.get('/admin/movie/list',User.signinRequired, User.adminRequired,Movie.list);
    app.get('/admin/update/:id',User.signinRequired, User.adminRequired,Movie.update);
    app.post('/admin/movie',User.signinRequired, User.adminRequired,Movie.save);
    app.delete('/admin/movie/del',User.signinRequired, User.adminRequired,Movie.del);


    // Comment
    app.post('/user/comment', User.signinRequired, Comment.save);


};