const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const device = require('./devices');
const files = require('./files');
const restart = require('./restart');
const login = require('./login');
const cors = require('@koa/cors');
var session = require('koa-session');

const app = new Koa();
const router = new Router();

var options = {
  origin: '*',
  exposeHeaders: '*',
};

app.use(cors(options));
app.keys = ['Shh, its a secret!'];
const CONFIG = {
  maxAge: 60,
};
app.use(session(CONFIG, app)); // Include the session middleware

app.use(bodyParser());

app.use((ctx, next) => {
  console.log('ctx.session', ctx.session);
  console.log('ctx.session.isNew', ctx.session.isNew);
  console.log('ctx.session._expired', ctx.session._expire);
  console.log('now', +new Date(Date.now()));
  console.log('ctx.session._expired', new Date(ctx.session._expire));
  console.log('now', new Date(Date.now()));
  console.log('ctx.session.authenticated', ctx.session.authenticated);

  return next(ctx, next);

  if (allowUrl(ctx.URL.pathname)) {
    return next(ctx, next);
  }

  console.log('ctx.session.authenticated', ctx.session.authenticated);
  if (ctx.session.authenticated === true)
    if (ctx.session._expire >= +new Date(Date.now())) {
      ctx.session._expire = +new Date(Date.now() + CONFIG.maxAge);
      return next(ctx, next);
    }

  ctx.session = null;
  ctx.status = 401;
  console.log('session fail');
  return;
});

router.use('/servicemanager/api/system', device.routes());
router.use('/servicemanager/api/restart', restart.routes());
router.use('/servicemanager/api/files', files.routes());
router.use('/servicemanager/api/login', login.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3100, () => {
  console.log('Listening to port 3100');
});

function allowUrl(pathname) {
  const urls = [
    '/servicemanager/api/login',
    '/servicemanager/api/logout',
    '/favicon.ico',
  ];
  console.log('pathname', pathname);

  for (const item of urls) {
    if (item.startsWith(pathname)) {
      console.log(item);
      return true;
    }
  }

  return false;
}
