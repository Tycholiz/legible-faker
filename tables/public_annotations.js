import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_reading'

insert({
  table: 'app_public.annotations',
  data: iterate(env.BASELINE, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'reading_id',
      value: uuid(i + 1),
    },
    {
      column: 'name',
      value: faker.lorem.word(6),
    },
    {
      column: 'location',
      value: faker.lorem.word(3),
    },
    {
      column: 'note',
      value: faker.lorem.text(),
    },
  ]),
})
