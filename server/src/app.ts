import { UserRouter } from './router/userRouter';
import { TaskRouter } from './router/taskRouter';
const Koa = require('koa');
const views = require('koa-views');
const router = require('koa-router')();
const bodyparser = require('koa-bodyparser');
const koaStatic = require('koa-static');
import connect from './db/mongoDBConnect';
connect();

var app =new Koa();

new UserRouter(router);
new TaskRouter(router);

app
  .use(bodyparser() )
  .use(router.routes())
  .use(router.allowedMethods())
  .use(koaStatic('/Users/huangxiangsai/git/work/open-source/taskTomato/server/test/view') );
  
app.listen(3001);

