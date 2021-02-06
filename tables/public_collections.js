import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

insert({
  table: 'app_public.collections',
  data: iterate(env.COLLECTIONS, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'name',
      value: faker.lorem.words(3),
    },
  ]),
})
