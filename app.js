const Koa = require("koa");
const app = new Koa();
const json = require("koa-json"); //将http响应格式化为json
const bodyParser = require("koa-bodyparser"); //解析http请求体
const Router = require("@koa/router");
const cors = require("@koa/cors");
const router = new Router();

router.get('/apia', async (ctx) => {
  ctx.body = { 
    message: '成功', 
    data: '测试数据',
    timestamp: new Date().toISOString()
  };
});

app.use(cors());
app.use(json());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(7000, () => {
  console.log('服务启动在 7000 端口'); // 启动成功的提示
});
console.log("Koa server is running on http://localhost:7000");
