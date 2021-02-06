import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'
import { user } from '../helpers/contextualUser'

import './public_entities'

insert({
  table: 'app_public.users',
  data: iterate(env.USERS, (i) => {
    const generatedUser = user(i + 1)
    return [
      {
        column: 'id',
        value: uuid(i + 1),
      },
      {
        column: 'slug',
        value: generatedUser.username,
      },
      {
        column: 'first_name',
        value: generatedUser.firstName,
      },
      {
        column: 'last_name',
        value: generatedUser.lastName,
      },
      {
        column: 'is_admin',
        value: false,
      },
      {
        column: 'is_active',
        value: true,
      },
      {
        column: 'entity_id',
        value: uuid(i + 1),
      },
    ]
  }),
})
