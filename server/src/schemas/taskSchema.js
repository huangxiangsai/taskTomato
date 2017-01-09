var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  title:        String,  // 任务描述
  userId : {type : Schema.Types.ObjectId , ref : 'user'},
  subTask : [{title : String , createTime : Date ,status :Number }], // 子任务
  createTime :   Date,   // 创建时间
  finishTime :  Date,   // 任务完成时间
  status :      Number, //  未完成， 已完成 ， 删除
  doTomatoCount : Number , // 已做番茄数
  preCount : Number ,   // 预期的翻墙数
  backup : String ,     // 任务的备注说明
  remindDate : Date ,   // 提醒的日期
  LoopType : Number , // 提醒的循环方式， 从不、每天，每周，两周，每月，每年
  sort : Number ,     // 排序 
  upTop : Boolean     // 置顶
});