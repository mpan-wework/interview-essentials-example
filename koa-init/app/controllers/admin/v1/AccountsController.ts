import { Context } from 'koa';
import _ from 'lodash';
import Account from '../../../models/Account';

export const index = async (ctx: Context) => {
  const whereClause = _.pickBy(_.pick(ctx.request.query, ['uuid']), _.identity);
  ctx.body = await Account.where(whereClause);
}

export const show = async (ctx: Context) => {
  const id: number = ctx.params.id;
  ctx.body = await Account.find(id);
}

export const update = async (ctx: Context) => {
  const id: number = ctx.params.id;
  ctx.body = await Account.find(id);
}

export const destroy = async (ctx: Context) => {
  const id: number = ctx.params.id;
  ctx.body = await Account.find(id);
}
