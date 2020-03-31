import KoaRouter from 'koa-router';
import * as AccountsController from './AccountsController';

const configure = async (router: KoaRouter) => {
  router.get('/admin/v1/users', AccountsController.index);
  router.get('/admin/v1/users/:id', AccountsController.show);
  router.put('/admin/v1/users/:id', AccountsController.update);
  router.delete('/admin/v1/users/:id', AccountsController.destroy);
};

export default configure;
