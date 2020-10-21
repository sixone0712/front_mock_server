const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const device = require('./devices');
const files = require('./files');
const restart = require('./restart');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

var options = {
  origin: '*',
  exposeHeaders: '*',
};

app.use(cors(options));

router.use('/service/api/devices', device.routes());
router.use('/service/api/files', files.routes());
router.use('/service/api/restart', restart.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3100, () => {
  console.log('Listening to port 3100');
});
