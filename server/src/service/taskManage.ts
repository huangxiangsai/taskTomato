import {Task} from "../schemas/taskSchema";

export class TaskManage {

	// 创建任务
	createTask(userId : String,title : String){
		return new Promise(function(resolve,reject){
			let promise = Task.create({userId : userId , title : title});
			promise.then(function(task){
				resolve({code : 200 , data : {id : task._id},msg : 'success'});
			},function(){
				reject({code : -1 , msg : '任务创建失败'});
			});
		});
	}

	// 设置置顶
	setUpTop(id){

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