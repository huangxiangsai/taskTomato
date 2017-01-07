var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:        String,  // 用户名
  password : String, // 
  mail : String ,
  Phone : Number ,  // 手机号
  loginDate : Date , //
  createTime:   Date   // 创建时间
});

module.exports =   mongoose.model('user', userSchema);
