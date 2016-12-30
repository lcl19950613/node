/**
 * Created by qiuyanlong on 2016/12/28 0028. 编写模型
 */

var mongoose = require('mongoose');
var MovieSchema = require("../schemas/movie");
var Movie = mongoose.model('Movie',MovieSchema); // 编译生成模型

module.exports = Movie;
