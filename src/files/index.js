const Router = require('koa-router');
const data = require('../../data/data');
const api = new Router();

api.get('/', (ctx) => {
  console.log(ctx.request.URL.href);
  const { device } = ctx.query;
  console.log('device', device);
  ctx.body = {
    lists: data.getFileInfo(device),
  };
});

api.post('/', (ctx) => {
  console.log(ctx.request.URL.href);
  ctx.body = {
    downloadId: 'dl20201217',
  };
});

let statusCnt = 0;
api.get('/download/:name?', (ctx) => {
  console.log(ctx.request.URL.href);
  statusCnt++;
  console.log(statusCnt, statusCnt);
  if (statusCnt > 10) {
    ctx.body = {
      donwloadId: 'dl20201019',
      status: 'done',
      url: 'http://',
    };
    statusCnt = 0;
  } else {
    ctx.body = {
      donwloadId: 'dl20201019',
      status: 'process',
      url: '',
    };
  }
});

module.exports = api;
