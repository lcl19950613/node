/**
 * Created by qiuyanlong on 2016/12/29 0029.
 */
var mongoose = require('mongoose');
var User = require('../models/user');

// signup
exports.showSignup = function(req, res) {
    res.render('signup', {
        title: '注册页面'
    })
}

exports.showSignin = function(req, res) {
    res.render('signin', {
        title: '登录页面'
    })
};

// 用户注册 User user/sigup
exports.signup = function(req,res){
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

        if(user){
            return res.redirect('/signin') // 假设已注册过
        }else{
            // 当前用户不存在的时候，避免用户名重复
            var user = new User(_user);
            user.save(function(err,user){
                if(err){
                    console.log(err)
                }
                res.redirect('/')
            });
        }

    });
};

// 用户注册 admin list
exports.list = function(req,res){
    User.fetch(function (err, users) {
        if(err){
            console.log(err);
        }
        res.render('userlist',{
            title:'用户列表项',
            users: users
        });
    });
};

/* 用户登录 sigin
 */
exports.signin = function(req,res){
    var _user = req.body.user;
    var name = _user.name;
    var password = _user.password;

    User.findOne({name:name},function(err,user){

        if(err){
            console.log(err)
        }
        if(!user){
            return res.redirect('/signup')
        }
        user.comparePassword(password,function(err,isMatch){

            if(err){
                console.log(err)
            }
            if(isMatch){
                // 使用会话  session 服务器跟客户端会话的状态
                req.session.user = user;

                return res.redirect('/')
            }else{
                console.log('password wrong');
                return res.redirect('/signin');
            }

        })

    });
};

// loout 退出登录
exports.logout = function(req,res){

    delete req.session.user;

    // 登出以后本地保存的还没有删除
    //delete app.locals.user;

    res.redirect('/');

};

   // midware for user
exports.signinRequired = function(req, res, next) {
    var user = req.session.user; console.log(user);

    if (!user) {
        return res.redirect('/user/signin');

    }

    next()
};

exports.adminRequired = function(req, res, next) {
    var user = req.session.user;
    if (user.role <= 10) {

        console.log('no access visit to this pages');
        return res.redirect('/user/signin');
    }

    next()
};