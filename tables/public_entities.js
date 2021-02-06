import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

const ENTITIES = env.USERS + env.ORGS

insert({
  table: 'app_public.entities',
  data: iterate(ENTITIES, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
  ]),
})
