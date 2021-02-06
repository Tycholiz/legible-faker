import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_users'

insert({
  table: 'app_public.social_followers',
  data: iterate(env.USERS * 0.5, (i) => [
    {
      column: 'follower',
      value: uuid(i + 1),
    },
    {
      column: 'followee',
      value: uuid(env.USERS - i),
    },
  ]),
})
