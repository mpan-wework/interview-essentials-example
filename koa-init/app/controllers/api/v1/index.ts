import KoaRouter from 'koa-router';
import * as AccountsController from './AccountsController';

const configure = async (router: KoaRouter) => {
  router.get('/api/v1/users', AccountsController.index);
  router.get('/api/v1/users/:id', AccountsController.show);
};

export default configure;
