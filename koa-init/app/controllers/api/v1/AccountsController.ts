import { Context } from 'koa';
import _ from 'lodash';
import Account from '../../../models/Account';

export const index = async (ctx: Context) => {
  const whereClause = _.pickBy(_.pick(ctx.request.query, ['name']), _.identity);
  ctx.body = await Account.where(whereClause);
}

export const show = async (ctx: Context) => {
  const id: number = ctx.params.id;
  ctx.body = await Account.find(id);
}
