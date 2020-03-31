import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import fs from 'fs';
import Koa from 'koa';
import json from 'koa-json';
import logger from 'koa-logger';
import path from 'path';
import router from './router/router';

Promise.resolve()
  .then(async () => {
    dotenvExpand(dotenv.config({ path: path.resolve
      (__dirname, '../.env') }));
    const local = path.resolve(__dirname, '../.env.local');
    if (fs.existsSync(local)) {
      dotenvExpand(dotenv.config({ path: local }));
    }
  })
  .then(async () => {
    const app = new Koa();

    app.use(json({}));
    app.use(logger());
    app.use(router.routes()).use(router.allowedMethods());

    app.listen(3000, () => console.info(`${process.env.NPM_PACKAGE_VERSION} started ${process.env.APP_ENV}`));
  });
