import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_books'

insert({
  table: 'app_public.book_prices',
  data: iterate(env.BOOKS, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'region_code',
      value: 'CA-BC',
    },
    {
      column: 'country_code',
      value: 'CA',
    },
    {
      column: 'currency_code',
      value: 'CAD',
    },
    {
      column: 'price',
      value: faker.random.number({ min: 5, max: 40 }),
    },
    {
      column: 'book_id',
      value: uuid(i + 1),
    },
  ]),
})
