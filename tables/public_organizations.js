import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_entities'
import './public_users'

const ENTITIES = env.USERS + env.ORGS

insert({
  table: 'app_public.organizations',
  data: iterate(env.USERS, (i) => {
    const companyName = faker.company.companyName()
    return [
      {
        column: 'id',
        value: uuid(i + 1),
      },
      {
        column: 'display_name',
        value: companyName,
      },
      {
        column: 'slug',
        value: (companyName.substring(0, 4) + faker.random.number({ min: 10, max: 99 })).replace('\'', ''),
        // value: companyName
        //   .replace(' and ', ' ')
        //   .replace(/[\s,-]/g, '_')
        //   .replace(/__+/g, '_')
        //   .toLowerCase()
        //   .substring(0, 15),
      },
      {
        column: 'avatar_url',
        value: faker.image.avatar(),
      },
      {
        column: 'is_active',
        value: true,
      },
      {
        column: 'owner_id',
        value: uuid(faker.random.number({ min: 1, max: env.USERS })),
      },
      {
        column: 'entity_id',
        value: uuid(ENTITIES - i), //because the first portion of entities is users and the second is organizations, we need to count backwards
      },
    ]
  }),
})
