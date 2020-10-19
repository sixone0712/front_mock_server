const Router = require('koa-router');
const data = require('../../data/data');
const api = new Router();

api.get('/', (ctx) => {
  ctx.body = data.getDeviceInfo();
});

module.exports = api;
