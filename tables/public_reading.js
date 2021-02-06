import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_users'
import './public_books'

insert({
  table: 'app_public.reading',
  data: iterate(env.BASELINE, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'last_location',
      value: faker.lorem.word(3),
    },
    {
      column: 'last_read',
      value: faker.lorem.word(3),
    },
    {
      column: 'duration',
      value: faker.random.number({ min: 5, max: 40 }),
    },
    {
      column: 'user_id',
      value: uuid(faker.random.number({ min: 1, max: env.USERS })),
    },
    {
      column: 'book_id',
      value: uuid(faker.random.number({ min: 1, max: env.BOOKS })),
    },
  ]),
})
