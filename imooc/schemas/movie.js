/**
 * Created by qiuyanlong on 2016/12/28 0028.  编写模式
 */

    var mongoose = require('mongoose');
    var MovieSchema = new mongoose.Schema({
        doctor:String,
        title:String,
        language:String,
        country:String,
        summary:String,   // 电影简介
        flash:String,
        poster:String,    // 海报地址
        year:String,
        meta:{            // 更新这条数据的时候一个时间的记录
            createAt:{
                type:Date,
                default:Date.now()
            },
            updateAt:{
                type:Date,
                default:Date.now()
            }
        }
    });

  // 为模式新增加一个法，当所有的数据进行save的时候都会进行调用这个方法，判断这个数据是不是新加的
  MovieSchema.pre('save',function(next){
    if(this.isNew){
        // 如果是新加的，就将创建时间设置为当前的时间
        this.meta.createAt = this.meta.updateAat = Date.now()
    }
    else{
        // 如果是更新保存之类的话 只更新  更新时间
        this.meta.updateAt = Date.now()
    }
        // 将存贮流程走下去
     next();
});

  // 新增静态方法，这些方法不会跟数据库进行交互的，只有经过model编译实例化以后才会有这个方法
MovieSchema.statics = {

    // 取出目前数据库里面的所有数据 链式的写法 也有回调的写法的
    fetch: function (cb) {
        return this
            .find({})
            .sort('meta.updateAt') // 排序
            .exec(cb);             // 执行回调方法
    },

    // 查询单条的数据方法
    findById: function (id, cb) {
        return this
            .findOne({_id: id})
            .exec(cb);
    }
};

  module.exports = MovieSchema;