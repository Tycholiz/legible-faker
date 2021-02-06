import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_users'
import './public_invoice-items'

insert({
  table: 'app_public.subscription_orders',
  data: iterate(env.BASELINE, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'user_id',
      value: uuid(faker.random.number({ min: 1, max: env.USERS })),
    },
    {
      column: 'invoice_item_id',
      value: uuid(i + 1),
    },
  ]),
})
