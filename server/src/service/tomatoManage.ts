import { Tomato } from '../schemas/tomatoSchema';



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

	//获得指定日期的番茄
	getTomatoByDate(){

	}

	// 获得今天的番茄，包括 完成或打断的
	getTomatoToday(){
 
	}

}