/**
 * Created by qiuyanlong on 2016/12/29 0029.
 * 与电影相关
 */
var _ = require('underscore');
var Movie = require('../models/movie'); //将模型也要加载进来
var User = require('../models/user');

// detail page
exports.detail = function(req,res){
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
};


// admin page
exports.new = function(req,res){
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
};

// admin list
exports.list = function(req,res){
    Movie.fetch(function (err, movies) {
        if(err){
            console.log(err);
        }
        res.render('list',{
            title:'imooc 列表页',
            movies: movies
        });
    });
};

//admin update movie 更新这部电影

exports.update =function (req, res) {
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
};


//admin post movie  从表单post过来的数据
exports.save = function (req, res) {
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
};

// delete 处理删除的请求
exports.del = function(req,res){
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
};
