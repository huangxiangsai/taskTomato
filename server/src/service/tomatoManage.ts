import { Tomato } from '../schemas/tomatoSchema';
import { T_STATUS } from '../schemas/taskSchema';



export class TomatoManage {

	/**
	 * 保存番茄
	 */
	create(tomato : Object){
		return new Promise(function(resolve,reject){
			let promise = Tomato.create(tomato);
			promise.then(function(tomato){
				resolve({code : 200 , msg : '创建番茄成功' , data : tomato});
			} , function(err){
				reject({code : -1 , msg : '创建番茄失败' });
			});
		});
	}

	// 完成番茄
	finish(id,title){

	}

	// 获得
	getTomatos(userId,type){

	}

	// 打断 番茄
	breakTomato(id,title){

	}

	//获得指定日期段完成的番茄
	getTomatoByDate(){

	}

	/**
	 * 获得今天的番茄，包括 完成或打断的
	 */
	getTomatoToday(userId,status){
		let date = new Date();
		let startTime = date.getTime() - (date.getHours() * 3600000 + date.getMinutes() * 60000 + date.getSeconds() * 1000);
		let endtTime = startTime + 24*3600000;
		
		return new Promise(function(resolve,reject){
			let promise = Tomato.find({userId : userId, status : status ,  startDate:  { $gte: startTime, $lt: endtTime  } }).exec();
			promise.then(function(tomatos){
				resolve({code : 200 , data : tomatos , msg : 'tomato list'});
			}, function(err){
				console.log("getTomatoToday",err);
			})

		});
	}
	

}