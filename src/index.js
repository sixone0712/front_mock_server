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

router.use('/servicemanager/api/system', device.routes());
router.use('/servicemanager/api/restart', restart.routes());
router.use('/servicemanager/api/files', files.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3100, () => {
  console.log('Listening to port 3100');
});
