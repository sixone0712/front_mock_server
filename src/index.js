const cors = require('@koa/cors');
const Koa = require('koa');
const Router = require('koa-router');
const device = require('./devices');
const files = require('./files');

const app = new Koa();
const router = new Router();

app.use(cors());

router.use('/service/api/devices', device.routes());
router.use('/service/api/files', files.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3100, () => {
  console.log('Listening to port 3100');
});
