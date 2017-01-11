import { Task } from '../schemas/taskSchema';
import { User } from '../schemas/userSchema';

export class TaskManage {

	// 创建任务
	createTask(userId : String,title : String){
		return new Promise(function(resolve,reject){
			console.log(userId);
			let promise = User.findOne({_id : userId}).exec();
			promise.then(function(user){
				console.log('user _id',user);
				return Task.find().count();
				
			}).then(function(count){
				return Task.create({userId : userId , title : title , createTime: Date.now() , sort : count});
			}).then(function(task){
				resolve({code : 200 , data : {id : task._id},msg : 'success'});
			},function(err){
				console.log('createTask',err);
				reject({code : -1 , msg : '任务创建失败'});
			});			
		});
	}

	// 设置置顶
	setUpTop(id:String){
		return new Promise(function(resolve,reject){
			let promise = Task.findByIdAndUpdate(id,{upTop : true});   
			promise.then(function(task){
				resolve({code : 200 , data : task , msg : '设置置顶成功'});
			});
		});
	}

	// 获取任务列表
	getTaskList(userId:String,status : Number){
		let taskList = [];
		return new Promise(function(resolve,reject){
			let promise = Task.find({userId : userId }).where('upTop').equals(true).and([{status : status}]).sort('sort').exec();
			promise.then(function(tasks){
				if(tasks){
					taskList = tasks;
				}
				return Task.find({userId : userId }).where('upTop').equals(false).and([{status : status}]).sort('sort').exec();
			},function(err){
				// reject({code : -1 , msg : '获取任务列表失败'});
			}).then(function(tasks){
				taskList = taskList.concat(tasks);
				resolve({code : 200 , data : taskList ,msg : 'success'});
			},function(err){
				console.log('getTaskList',err);
				reject({code : -1 , msg : '获取任务列表失败'});
			});
		});
	}

	// 排序{id }
	taskSort(taskArray){

	}

	// 创建子任务
	createSubTask(id,subTitle){

	}

	// 完成任务
	finishTask(id){

	}

	// 删除任务
	deleteTask(id){

	}

	// 获得指定日期的任务  status 任务的状态
	getTaskListByDate(status){

	}

	// 获得当天的任务
	getTaskToday(){
 
	}

	

}