import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_invoices'

insert({
  table: 'app_public.invoice_items',
  data: iterate(env.BASELINE, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'item_price',
      value: faker.random.number({ min: 5, max: 40 }),
    },
    {
      column: 'invoice_id',
      value: uuid(i + 1),
    },
  ]),
})
