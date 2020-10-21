const Router = require('koa-router');
const data = require('../../data/data');
const api = new Router();
const fs = require('fs');
const path = require('path');
const extname = path.extname;


api.get('/', (ctx) => {
  console.log(ctx.request.method, ctx.request.URL.href);
  const { device } = ctx.query;
  console.log('device', device);
  ctx.body = {
    lists: data.getFileInfo(device),
  };
});

api.post('/', (ctx) => {
  console.log(ctx.request.method, ctx.request.URL.href);

  console.log(ctx.request.body);

  ctx.body = {
    downloadId: 'dl20201217',
  };
});

let statusCnt = 0;
api.get('/download/:name?', (ctx) => {
  console.log(ctx.request.method, ctx.request.URL.href);
  statusCnt++;
  console.log(statusCnt, statusCnt);
  if (statusCnt > 2) {
    ctx.body = {
      donwloadId: 'dl20201019',
      status: 'done',
      url: 'http://localhost:3100/service/api/files/store/dl20201019',
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


api.delete('/download/:name?', (ctx) => {
  console.log(ctx.request.method, ctx.request.URL.href);
  ctx.body = null;
});

api.get('/store/:name', async (ctx) => {
  console.log(ctx.request.method, ctx.request.URL.href);

  console.log("__dirname", __dirname);

  const fpath = path.join(__dirname, '\\test_log_file.zip');
  const fstat = await stat(fpath);

  if (fstat.isFile()) {
    ctx.type = extname(fpath);
    ctx.body = fs.createReadStream(fpath);
    ctx.attachment('test_log_file.zip');
  }
});

function stat(file) {
  return new Promise(function(resolve, reject) {
    fs.stat(file, function(err, stat) {
      if (err) {
        reject(err);
      } else {
        resolve(stat);
      }
    });
  });
}

module.exports = api;
