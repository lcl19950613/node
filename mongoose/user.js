/**
 * Created by qiuyanlong on 2016/12/22 0022.
 */

/**
 * 用户信息
 */
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : { type: String },                    //用户账号
    userpwd: {type: String},                        //密码
    userage: {type: Number},                        //年龄
    logindate : { type: Date}                       //最近登录时间
});

/**
 * 定义的user的schema生成一个User的model并导出
 */
module.exports = mongoose.model('User',UserSchema); // 表名称== collection 集合的名称
