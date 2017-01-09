import { UserRouter } from './router/userRouter';
const Koa = require('koa');
const views = require('koa-views');
const router = require('koa-router')();
const bodyparser = require('koa-bodyparser');
import connect from './db/mongoDBConnect';
connect();

var app =new Koa();

let id : number = 0;

new UserRouter(router);


// router.get('/task/:id', (ctx) =>{
//     console.log(ctx);
//     id = ctx.prams.id;
//     ctx.body = '{code : 200 , id : '+id+'}';
// } )

// router.post('/getTask/:id',(ctx) => {
//     console.log(11);
//     console.log(ctx.params.id);
// })


app
  .use(bodyparser() )
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3001);

