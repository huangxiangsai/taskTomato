
import {Router} from './router';
import { RouterInterface } from '../routerInterface';
import { TaskManage } from '../service/taskManage';

/**
 * UserRouter
 */
export class UserRouter extends Router{
    taskManage : TaskManage = new TaskManage();
    constructor(router) {
        super(router);
        this.initTaskRouter();
    }

    initTaskRouter(){
        let that = this;
        let router : RouterInterface = this.router;
        
        // 创建任务
        
    }
}  
