// 番茄Schema


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tomatoSchema = new Schema({
  taskId : {type : Schema.Types.ObjectId , ref : 'task'} ,  // 任务ID
  userId : {type : String},   // 用户ID
  title:       String,  // 番茄描述，完成的内容 或 被打断的原因
  startDate:   Date,   // 开始番茄时间
  endDate :    Date,   // 结束番茄时间
  status :     Number, //  番茄状态 ：  1 完成， 2 打断
});

export let Tomato  =  mongoose.model('tomato', tomatoSchema);