import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_users'

insert({
  table: 'app_public.bookshelves',
  data: iterate(env.BOOKSHELVES, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'owner_id',
      value: uuid(faker.random.number({ min: 1, max: env.USERS })),
    },
    {
      column: 'name',
      value: faker.lorem.word(3)
    }
  ]),
})
