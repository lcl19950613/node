/**
 * Created by qiuyanlong on 2016/12/22 0022.
 */
var User = require("./user.js");

/**
 * 随机生成姓名
 */
function randomName(){
    return 'Mri'+Math.random()*10+Math.random()*10;
}

/**
 * 插入
 */
function insert() {

    var user = new User({
        username : randomName(),                  //用户账号
        userpwd: 'tt',                            //密码
        userage: 21,                              //年龄
        logindate : new Date()                    //最近登录时间
    });

    user.save(function (err, res) {

        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }

    });
}

/**
 *  数据更新
 */

function update(){
    var wherestr = {'username' : 'Tracy McGrady'};
    var updatestr = {'userpwd': 'qiuyanlong'};

    User.update(wherestr, updatestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

/**
 * 更新指定_ID的表数据
 * 也可以使用 Model.findOneAndUpdate([conditions], [update], [options], [callback])单独更新某一条数据
 */

function findByIdAndUpdate(){
    var id = '585b70bd79a89414e8427d40';
    var updatestr = {'username': 'anikin'};

    User.findByIdAndUpdate(id, updatestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}
/**
 *  删除数据
 *  其他两种删除数据的方式有：
 *
 *  　Model.findByIdAndRemove(id, [options], [callback])　　　　　　
 *　　Model.findOneAndRemove(conditions, [options], [callback])
 */
function del(){
    var wherestr = {'username' : 'Mr.james'};

    User.remove(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

/**
 * 条件查询
 * User.find({userage: {$gte: 21, $lte: 65}}, callback);    //这表示查询年龄大于等21而且小于等于65岁
 * 　其实类似的还有：　

 　　$or　　　　或关系

 　　$nor　　　 或关系取反

 　　$gt　　　　大于

 　　$gte　　　 大于等于

 　　$lt　　　　 小于

 　　$lte　　　  小于等于

 　　$ne            不等于

 　　$in             在多个值范围内

 　　$nin           不在多个值范围内

 　　$all            匹配数组中多个值

 　　$regex　　正则，用于模糊查询

 　　$size　　　匹配数组大小

 　　$maxDistance　　范围查询，距离（基于LBS）

 　　$mod　　   取模运算

 　　$near　　　邻域查询，查询附近的位置（基于LBS）

 　　$exists　　  字段是否存在

 　　$elemMatch　　匹配内数组内的元素

 　　$within　　范围查询（基于LBS）

 　　$box　　　 范围查询，矩形范围（基于LBS）

 　　$center       范围醒询，圆形范围（基于LBS）

 　　$centerSphere　　范围查询，球形范围（基于LBS）

 　　$slice　　　　查询字段集合中的元素（比如从第几个之后，第N到第M个元素）
 */
function getByConditions(){
    var wherestr = {'username' : 'Tracy McGrady'};

    //var opt = {"username": 1 ,"_id": 0};
    /**
     * 第2个参数可以设置要查询输出的字段,比如改成
     * User.find(wherestr,opt,function(err, res)
     * 输出只会有username字段，设置方法如上，1表示查询输出该字段，0表示不输出
     */
    User.find(wherestr,function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

/**
 *  数量查询
 *  Model.count(conditions, [callback])
 */

function getCountByConditions(){
    var wherestr = {};

    User.count(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}


/**
 *  根据ID进行查询
 */
function getById(){
    var id = '585b6fc184fe251aacb91726';

    User.findById(id, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}


/**
 * 模糊查询
 */
function getByRegex(){
    var whereStr = {'username':{$regex:/a/i}};

    User.find(whereStr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

/**
 *  分页查询
 *  分页是用得比较多的查询，分页原理用过其它数据库的都知道，分页用到的函数和mysql的比较类似上面我用到sort(),
 */

function getByPager(){

    var pageSize = 2;                  //一页多少条
    var currentPage = 1;                //当前第几页
    var sort = {'logindate':-1};        //排序（按登录时间倒序）
    var condition = {};                 //条件
    var skipnum = (currentPage - 1) * pageSize;   //跳过数

    User.find(condition).skip(skipnum).limit(pageSize).sort(sort).exec(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

//去重 Model.distinct(field, [conditions], [callback])　　　　　　　　　　　　　　　　　　
//getByPager();
//getByRegex();
//getById()
//getCountByConditions();
//getByConditions();
//findByIdAndUpdate();
//update()
//insert();
//del();