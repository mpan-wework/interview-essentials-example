import Router from 'koa-router';
import adminV1 from '../controllers/admin/v1';
import apiV1 from '../controllers/api/v1';

const router = new Router();
adminV1(router);
apiV1(router);

export default router;
