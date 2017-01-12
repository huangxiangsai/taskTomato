import { Task ,T_STATUS} from '../schemas/taskSchema';
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
			let promise = Task.findByIdAndUpdate(id,{upTop : true}).exec('update');   
			promise.then(function(task){
				resolve({code : 200 , data : task , msg : '设置置顶成功'});
			} , function(){
				reject({code : -1 , msg : '设置置顶失败'});
			});
		});
	}

	// 取消置顶
	unSetUpTop(id : String){
		return new Promise(function(resolve,reject){
			let promise = Task.findByIdAndUpdate(id,{upTop : false}).exec('update');   
			promise.then(function(task){
				resolve({code : 200 , data : task , msg : '取消置顶成功'});
			}, function(){
				reject({code : -1 , msg : '取消置顶失败'});
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
	setTasksSort(taskId,sort){
		return new Promise(function(resolve,reject){
			let promise =  Task.findByIdAndUpdate(taskId,{sort : sort}).exec();   
			promise.then(function(){
				resolve({code : 200 });
			} , function(err){
				reject({code : -1 , msg : err });
			});
		});
	}

	// 创建子任务
	createSubTask(id,subTitle){

	}

	// 完成任务
	finishTask(taskId){
		return new Promise(function(resolve,reject){
			let promise =  Task.findByIdAndUpdate(taskId,{finishTime : Date.now(),status : T_STATUS.DONE }).exec(); 
			promise.then(function(){
				resolve({code : 200 , msg : 'success'});
			}, function(err){
				console.log('finishTask',err);
				reject({code : -1 , msg : '系统出错，任务设置失败'});
			})
		});
	}

	// 删除任务
	deleteTask(taskId){
		return new Promise(function(resolve,reject){
			let promise =  Task.findByIdAndUpdate(taskId,{status : T_STATUS.DEL }).exec(); 
			promise.then(function(){
				resolve({code : 200 , msg : 'success'});
			}, function(err){
				console.log('finishTask',err);
				reject({code : -1 , msg : '系统出错，任务设置失败'});
			})
		});
	}

	// 获得指定日期的任务  status 任务的状态
	getTaskListByDate(status){

	}

	// 获得当天的任务
	getTaskToday(){
 
	}

	

}