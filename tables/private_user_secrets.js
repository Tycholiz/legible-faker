import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'
import { user } from '../helpers/contextualUser'

import './public_users'

insert({
  table: 'app_private.user_secrets',
  data: iterate(env.USERS, (i) => [
    {
      column: 'user_id',
      value: uuid(i + 1),
    },
    {
      column: 'email',
      value: user(i + 1).email,
    },
    {
      column: 'password_hash',
      raw: "crypt('password', gen_salt('bf'))",
    },
  ]),
})
