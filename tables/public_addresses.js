import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_users'

//TODO: Generate 2 addresses per user/entity

insert({
  table: 'app_public.addresses',
  data: iterate(env.BASELINE, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'country_code',
      value: faker.random.alpha({count: 2, upcase: true}),
    },
    {
      column: 'subdivision_code',
      value: faker.random.alpha({count: 2, upcase: true}),
    },
    {
      column: 'city',
      value: faker.address.city(),
    },
    {
      column: 'address1',
      value: faker.address.streetAddress(),
    },
    {
      column: 'address2',
      value: null,
    },
    {
      column: 'postal_code',
      value: faker.address.zipCode(),
    },
    //TODO: Might be entity id
    {
      column: 'user_id',
      value: uuid(i + 1),
    },
  ]),
})
