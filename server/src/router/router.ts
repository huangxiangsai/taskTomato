import { RouterInterface } from '../routerInterface';
import { UserManage } from '../service/userManage';
/**
 * 基础Router,提供一些公共方法
 */
export class Router{
    router : RouterInterface;
    userMange : UserManage;
    constructor(router) {
        this.router = router;
        this.userMange = new UserManage();
    }

    // 获得token
    getToken(ctx){
       let cookies: String = ctx.request.header.cookie;
       let token : String;
       cookies.replace(new RegExp(/token=([^;]*);/),(all,_token)=>{
           return token = _token;
       });
       return token;
    }

    // 校验用户是否登录
    validateLogin(ctx){
        let that = this;
        return new Promise(function(resolve,reject){
            let token : String = this.getToken(ctx);
            let userId : String = token.split('&')[0];
            token = token.split('&')[1];
            
        });
        
    }
}