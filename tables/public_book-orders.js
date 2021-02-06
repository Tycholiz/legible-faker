import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_books'
import './public_users'
import './public_invoice-items'

insert({
  table: 'app_public.book_orders',
  data: iterate(env.BASELINE, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'book_id',
      value: uuid(i + 1),
    },
    {
      column: 'purchaser_id',
      value: uuid(faker.random.number({ min: 1, max: env.USERS })),
    },
    {
      column: 'recipient_id',
      value: uuid(faker.random.number({ min: 1, max: env.USERS })),
    },
    {
      column: 'invoice_item_id',
      value: uuid(i + 1),
    },
  ]),
})
