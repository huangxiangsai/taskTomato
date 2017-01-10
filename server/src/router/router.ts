import { RouterInterface } from '../routerInterface';
export class Router{
    router : RouterInterface;
    constructor(router) {
        this.router = router;
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
}