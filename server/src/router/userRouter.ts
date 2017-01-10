
import { RouterInterface } from '../routerInterface';
import { UserManage } from '../service/userManage';

/**
 * UserRouter
 */
export class UserRouter {
    router : RouterInterface;
    userManage : UserManage = new UserManage();
    constructor(router) {
        this.router = router;
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
                let body = ctx.request.body;
                let { mail , password}  = body;
                ctx.body = await that.userManage.login(body.mail,password);     
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
