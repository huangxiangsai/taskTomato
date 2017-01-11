const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import { Counter } from './counterSchema';

let userSchema = new Schema({
  _id : String,
  name:        String,  // 用户名
  password : String, // 
  mail : String ,
  loginDate : Date , //
  token : String , // 登录时生成的token 
  createTime:   Date  , // 创建时间
  isActi : {type : Number , default : 0}, // 0 未激活 ， 1 激活
  actiCode : String  // 激活码
});

userSchema.pre('save', function(next) {
  var doc = this;
  Counter.findByIdAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} }, function(error, counter) {
    if(error)
    return next(error);
    doc._id = counter.seq;
    next();
  });
});

export let User  =  mongoose.model('user', userSchema,'user');


