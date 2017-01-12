
import {Router} from './router';
import { RouterInterface } from '../routerInterface';
import { TaskManage } from '../service/taskManage';

/**
 * UserRouter
 */
export class TaskRouter extends Router{
    taskManage : TaskManage = new TaskManage();
    constructor(router) {
        super(router);
        this.initTaskRouter();
    }

    initTaskRouter(){
        let that = this;
        let router : RouterInterface = this.router;
        
        /**
         * 创建任务
         */
        router.post('/task', async (ctx) => {
            try {
                let userId : String = '4';
                let title : String = ctx.request.body.title;
                ctx.body = await that.taskManage.createTask(userId,title);
            } catch (error) {
                console.log('/task',error);
                ctx.body = error;
            }
        });

        /**
         * 创建子任务
         */
        router.post('/createSubTask', async (ctx) =>{
            try {
                let title : String = ctx.request.body.subTitle;
                let taskId : String = ctx.request.body.taskId;
                ctx.body = await that.taskManage.createSubTask(taskId,title);
            } catch (error) {
                console.log('/createSubTask',error);
                ctx.body = error;
            }
        })

        /**
         * 标记子任务完成
         */
        router.post('/finishSubTask', async (ctx) =>{
            try {
                let subTaskId : String = ctx.request.body.subTaskId;
                let taskId : String = ctx.request.body.taskId;
                ctx.body = await that.taskManage.finishSubTask(taskId,subTaskId);
            } catch (error) {
                console.log('/subTaskId ',error);
                ctx.body = error;
            }
        })

        
        /**
         * 任务置顶
         */
        router.get('/setUpTop/:taskId', async (ctx) => {
            try {
                ctx.body = await that.taskManage.setUpTop(ctx.params.taskId);
            } catch (error) {
                console.log('/setUpTop/'+ctx.params.taskId,error);
                ctx.body = error;
            }
        })

        
        /**
         * 任务取消置顶
         */
        router.get('/unSetUpTop/:taskId', async (ctx) => {
            try {
                ctx.body = await that.taskManage.unSetUpTop(ctx.params.taskId);
            } catch (error) {
                console.log('/setUpTop/'+ctx.params.taskId,error);
                ctx.body = error;
            }
        })


        /**
         * 获得未完成任务列表
         */
        router.get('/taskList', async (ctx) => {
            try {
                let userId : String = '4';
                ctx.body = await that.taskManage.getTaskList(userId,0);
            } catch (error) {
                console.log('/taskList',error);
                ctx.body = error;
            }
        });

        /**
         * 获得已完成任务列表
         */
        router.get('/taskList/done', async (ctx) => {
            try {
                let userId : String = '4';
                ctx.body = await that.taskManage.getTaskList(userId,1);
            } catch (error) {
                console.log('/taskList/done',error);
                ctx.body = error;
            }
        });

        /**
         * 任务列表排序
         */
        router.post('/tasks/sort', async (ctx) => {
            try {
                let taskIds  = ctx.request.body.taskIds.split(',');;
                for(let i = 0 ; i < taskIds.length ;i++){
                    await that.taskManage.setTasksSort(taskIds[i],i+1);
                }
                ctx.body = {code : 200 , msg : 'success'};
            } catch (error) {
                console.log('/tasks/sort',error);
                ctx.body = error;
            }
        } );

        
        /**
         * 设置任务完成
         */
        router.get('/finishTask/:id', async (ctx) =>{
            try {
                let taskId  = ctx.params.id;
                ctx.body = await that.taskManage.finishTask(taskId);
            } catch (error) {
                console.log('finish task ',error);
                ctx.body = error;
            }
        } )

        /**
         * 删除任务
         */
        router.get('/deleteTask/:id' , async (ctx) =>{
            try {
                let taskId  = ctx.params.id;
                ctx.body = await that.taskManage.deleteTask(taskId);
            } catch (error) {
                console.log('deleteTask task ',error);
                ctx.body = error;
            }
        } );
    }
}  
