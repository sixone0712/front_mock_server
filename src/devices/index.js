const Router = require('koa-router');
const data = require('../../data/data');
const api = new Router();

api.get('/', async (ctx) => {
  console.log(ctx.request.method, ctx.request.URL.href);
  await new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
  ctx.body = data.getDeviceInfo();
});

module.exports = api;
