import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_users'
import './public_addresses'
import { user } from '../helpers/contextualUser'

insert({
  table: 'app_public.payment_profiles',
  data: iterate(env.BASELINE, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'last_digits',
      value: faker.random.number({ min: 1000, max: 9999 }),
    },
    {
      column: 'cardholder',
      value: user(i + 1).fullName
    },
    //TODO: make some cards expired
    {
      column: 'expiry',
      value: new Date(1504095567183),
    },
    //TODO: have 1 card as primary true
    {
      column: 'is_primary',
      value: false,
    },
    {
      column: 'stripe_code',
      value: faker.internet.password(),
    },
    {
      column: 'address_id',
      value: uuid(i + 1),
    },
    {
      column: 'user_id',
      value: uuid(faker.random.number({ min: 1, max: env.USERS })),
    },
  ]),
})
