import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

insert({
  table: 'app_public.categories',
  data: iterate(env.BASELINE, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'bisac_code',
      value: 'LAN' + faker.random.number({ min: 100000, max: 999999 }),
    },
    {
      column: 'bic_code',
      value: faker.random.alphaNumeric(8).toUpperCase(),
    },
    {
      column: 'thema_code',
      value: faker.random.alphaNumeric(15).toUpperCase(),
    },
    {
      column: 'name',
      value: 'Mystery',
    },
  ]),
})
