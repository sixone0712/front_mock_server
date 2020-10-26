const Router = require('koa-router');
const api = new Router();

api.get('/', (ctx) => {
  console.log(ctx.request.method, ctx.request.URL.href);

  const { password } = ctx.query;

  console.log('password', password);
  if (password === 'password') {
    ctx.session.authenticated = true;
    ctx.status = 200;
  } else {
    console.error('wrong password');
    ctx.status = 400;
  }
  //console.log('ctx.session', ctx.session);
});

module.exports = api;
