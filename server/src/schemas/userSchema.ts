var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:        String,  // 用户名
  password : String, // 
  mail : String ,
  loginDate : Date , //
  token : String , // 登录时生成的token 
  createTime:   Date  , // 创建时间
  isActi : {type : Number , default : 0}, // 0 未激活 ， 1 激活
  actiCode : String  // 激活码
});



export let User  =  mongoose.model('user', userSchema);