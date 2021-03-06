var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subTaskSchema = new Schema({
  title : String , 
  createTime : Date ,
  status : {type : Number ,default : 0} //  0 未完成  ， 1 完成
})

var taskSchema = new Schema({
  title:        String,  // 任务描述
  userId : {type : String},
  subTask : [subTaskSchema], // 子任务
  createTime :   Date,   // 创建时间
  finishTime :  Date,   // 任务完成时间
  status :  {type:Number , default: 0}, //  0 未完成， 1 已完成 ，-1 删除
  doTomatoCount : Number , // 已做番茄数
  preCount : Number ,   // 预期的翻墙数
  backup : String ,     // 任务的备注说明
  remindDate : Date ,   // 提醒的日期
  LoopType : Number , // 提醒的循环方式， 从不、每天，每周，两周，每月，每年
  sort : Number ,     // 排序 
  upTop : {type : Boolean , default : false}    // 置顶
});

export let Task  =  mongoose.model('task', taskSchema,'task');

export enum T_STATUS {
  /**
  * 未完成任务
  **/ 
  UNDO = 0,
  /**
  * 完成任务
  **/ 
  DONE = 1,
  /**
  * 删除任务
  **/
  DEL =  -1
}