const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const router = require('./routes');
require('./config');
require('./utils');
const port = process.argv.splice(2)[0] || config.port || 3000;

// middlewares
app.use(bodyParser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(require('koa-static')(__dirname + '/public'))

// routes
app.use(router.routes(), router.allowedMethods());

// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const end = new Date();
    const ms = Number(end) - Number(start);
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

// 项目启动
const server = app.listen(port);
//取消超时时间
server.setTimeout(0);
console.info('\x1b[36m%s\x1b[0m', `发版程序：端口${port}启动成功！`);