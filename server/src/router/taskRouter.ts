
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
        
        // 创建任务
        router.post('/task', async (ctx) => {
            try {
                let userId : String = '4';
                let title : String = ctx.request.body.title;
                ctx.body =await that.taskManage.createTask(userId,title);
            } catch (error) {
                console.log('/task',error);
            }
        });
    }
}  
