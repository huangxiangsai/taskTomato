var Koa = require('koa');
var app = new Koa();

app.use(ctx => {
    console.log(ctx.url);
})



app.use(ctx => {
    ctx.body = 'Hello World';
});


app.listen(3000);
