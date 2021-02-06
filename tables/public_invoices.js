import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

insert({
  table: 'app_public.invoices',
  data: iterate(env.BASELINE, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'total_price',
      value: faker.random.number({ min: 5, max: 40 }),
    },
  ]),
})
