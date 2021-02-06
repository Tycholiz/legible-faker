import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_books'
import './public_collections'

insert({
  table: 'app_public.book_collections',
  data: iterate(env.BASELINE, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'chronology',
      value: faker.random.number({ min: 1, max: 10 }),
    },
    {
      column: 'book_id',
      value: uuid(i + 1),
    },
    {
      column: 'collection_id',
      value: uuid(faker.random.number({ min: 1, max: env.COLLECTIONS })),
    },
  ]),
})
