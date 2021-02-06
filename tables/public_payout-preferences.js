import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_organizations'

insert({
  table: 'app_public.payout_preferences',
  data: iterate(env.ORGS * 2, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'organization_id',
      value: uuid(faker.random.number({ min: 1, max: env.ORGS })),
    },
  ]),
})
