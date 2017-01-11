
import {Router} from './router';
import { RouterInterface } from '../routerInterface';
import { UserManage } from '../service/userManage';

/**
 * UserRouter
 */

export class UserRouter extends Router{
    userManage : UserManage = new UserManage();
    constructor(router) {
        super(router);
        this.initUserRouter();
    }

    initUserRouter(){
        let that = this;
        let router : RouterInterface = this.router;
        // 用户注册
        router.post('/register',async (ctx)=> {
            try {
                ctx.body = await that.userManage.createUser(ctx.request.body);     
            } catch (error) {
                console.info('error',error);
                ctx.body = error;
            }
        })

        // 用户登录
        router.post('/login',async (ctx)=> {
            try {
                let token = that.getToken(ctx);
                console.log('token',token);
                let body = ctx.request.body;
                let { mail , password}  = body;
                 
                let result:{data? : String} = await that.userManage.login(body.mail,password); 
                token = result.data;    
                ctx.set('Set-Cookie','user_token='+token+';' );
                ctx.body = result;
            } catch (error) {
                console.error(error);
                ctx.body = error;
            }
        })

        router.get('/getusers',async (ctx) => {
            ctx.body = await that.userManage.getUserlist();
        })

        router.get('/clearUser',async (ctx) => {
            ctx.body = await that.userManage.clearUser();
        })
    }
}  
