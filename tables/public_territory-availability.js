import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_books'

insert({
  table: 'app_public.territory_availability',
  data: iterate(env.BOOKS, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'region_code',
      value: 'NA',
    },
    {
      column: 'country_code',
      value: 'CA',
    },
    {
      column: 'book_id',
      value: uuid(faker.random.number({ min: 1, max: env.BOOKS })),
    },
  ]),
})
