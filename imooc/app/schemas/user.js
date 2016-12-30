/**
 * Created by qiuyanlong on 2016/12/28 0028.
 *
 */
var mongoose = require("mongoose");

// 专门为密码存贮算法生成的包 在winds下面安装比较费劲，就使用bcryptjs代替了 npm install bcryptjs -- save
var bcrypt = require("bcryptjs");

var SALT_WORK_FACROR=10;            //加密强度

var UserSchema = new mongoose.Schema({
    name:{
        unique:true, //唯一索引
        type:String
    },
    password:String, //加盐 [在用户自定义数据中加入自定义的部分] 的密码hash后的值，而且是不可逆的算法，因此只保存的是字符串
    // 0 normal use 1 verified user  >10 admin >50 super admin
    role:{
        type:Number,
        default:0
    },
    meta:{
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

UserSchema.pre("save",function (next) {//每次在存储数据之前都会来调用这个方法（中间件）

    var user= this;  //this指向问题要多注意，这里。

    if(this.isNew){
        this.meta.createAt=this.meta.updateAt=Date.now();
    }else{
        this.meta.updateAt=Date.now();
    };

    //先生成后的盐  第一个参数： 计算强度
    bcrypt.genSalt(SALT_WORK_FACROR,function(err,salt){
        if(err) return next(err);

        //
        bcrypt.hash(user.password,salt,function(err,hash){
            if(err) return next(err);
            user.password = hash;
            next();
        });
    })

});

//添加实例方法,通过实例就可以调用
UserSchema.methods={
    comparePassword:function(_password,cb){
        bcrypt.compare(_password,this.password,function(err,isMatch){
            if(err) return cb(err);
            cb(null,isMatch);
        })
    }
}


// 静态方法是在内部使用
UserSchema.statics = {   //添加一个静态方法，静态方法从模型上去调用
    fetch:function(cb){
        return this
            .find({})
            .sort("meta.updateAt")//排序方法
            .exec(cb)
    },
    findById:function(id,cb){
        return this
            .findOne({_id:id})
            .exec(cb)
    }
}

module.exports=UserSchema;