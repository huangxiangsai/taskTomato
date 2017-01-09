export interface RouterInterface {
    get(url : string , fn : Function) : any;
    post(url : string , cb : Function) : any;
    delete(url : string , fn : Function) : any;
    put(url : string , fn : Function) : any;
    param(url : string , fn : Function) : any;
    redirect(url : string , toUrl : string) : any;
}