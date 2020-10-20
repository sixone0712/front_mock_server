const Router = require('koa-router');
const data = require('../../data/data');
const api = new Router();

api.get('/', (ctx) => {
  console.log(ctx.request.method, ctx.request.URL.href);
  ctx.body = data.getDeviceInfo();
});

module.exports = api;
