var mongoose = require('mongoose');

module.exports = mongoose.model('User',new mongoose.Schema({
    username:String,    //用户名
    email:String,       //邮箱
    password:String,    //密码
    avatar:String       //头像
}));

mongoose.Promise = Promise;
