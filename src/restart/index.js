const Router = require('koa-router');
const restart = new Router();

restart.get('/os', async (ctx) => {
  console.log(ctx.request.method, ctx.request.URL.href);
  const { device, id, password } = ctx.query;

  await new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 3000);
  });

  ctx.body = {
    device: device,
    result: 'success',
    errorReason: ""
  };
});

restart.get('/docker', async (ctx) => {
  console.log(ctx.request.method, ctx.request.URL.href);
  const { device } = ctx.query;

  await new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 3000);
  });

  (ctx.body = {
    device: device,
    result: 'success',
    errorReason: ""
  });
});

module.exports = restart;
