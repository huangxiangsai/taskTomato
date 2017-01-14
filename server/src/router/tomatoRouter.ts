
import {Router} from './router';
import { RouterInterface } from '../routerInterface';
import { TomatoManage } from '../service/tomatoManage';

/**
 * TomatoRouter
 */

export class TomatoRouter extends Router{
    tomatoManage : TomatoManage = new TomatoManage();
    constructor(router) {
        super(router);
        this.initTomatoRouter();
    }

    initTomatoRouter(){
        let that = this;
        let router : RouterInterface = this.router;

        /**
         * 创建番茄
         */
        router.post('/createTomato' , async (ctx)=>{
            try {
                let tomato = {
                    taskId : ctx.request.body.taskId,
                    userId : '4',
                    startDate : ctx.request.body.startDate,
                    endDate : ctx.request.body.endData,
                    title : ctx.request.body.title,
                    status : ctx.request.body.status // 1 : 完成 ， -1 打断
                };
                ctx.body = await that.tomatoManage.create(tomato);     
            } catch (error) {
                console.info('error',error);
                ctx.body = error;
            }
        } )

        /**
         * 获得指定状态的当天番茄列表
         */
        router.get('/getTomatoToday/:status', async (ctx) => {
            try {
                let status = ctx.params.status;
                let userId = '4';
                ctx.body = await that.tomatoManage.getTomatoToday(userId,status);     
            } catch (error) {
                console.info('error',error);
                ctx.body = error;
            }
        })

    }
}  
