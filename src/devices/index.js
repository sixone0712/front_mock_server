const Router = require('koa-router');
const data = require('../../data/data');
const api = new Router();

api.get('/', async (ctx) => {
  console.log(ctx.request.method, ctx.request.URL.href);

  let n = ctx.session.views || 0;
  ctx.session.views = ++n;
  console.log(n);

  await new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
  ctx.body = data.getDeviceInfo();
});

module.exports = api;
