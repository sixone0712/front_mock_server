const Koa = require('koa');
const Router = require('koa-router');
const device = require('./devices');
const files = require('./files');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();


var options = {
  origin: '*',
  exposeHeaders: "*"
};

app.use(cors(options));

router.use('/service/api/devices', device.routes());
router.use('/service/api/files', files.routes());


app.use(router.routes()).use(router.allowedMethods());


app.listen(3100, () => {
  console.log('Listening to port 3100');
});
