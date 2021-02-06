import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_organizations'
import './public_users'

insert({
  table: 'app_public.organization_memberships',
  data: iterate(env.USERS * 0.5, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'is_owner',
      value: false,
    },
    {
      column: 'is_billing_contact',
      value: false,
    },
    {
      column: 'organization_id',
      // users will either be part of org1 or org2
      value: uuid(faker.random.number({ min: 1, max: 2 })),
    },
    {
      column: 'user_id',
      value: uuid(env.USERS - i),
    },
  ]),
})
