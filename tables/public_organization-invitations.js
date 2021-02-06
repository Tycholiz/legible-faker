import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'
import { user } from '../helpers/contextualUser'

import './public_organizations'
import './public_users'

insert({
  table: 'app_public.organization_invitations',
  data: iterate(env.BASELINE * 0.25, (i) => {
    const orgID = faker.random.number({ min: 1, max: env.ORGS })
    const userID = faker.random.number({ min: 1, max: env.USERS })
    return [
      {
        column: 'id',
        value: uuid(i + 1),
      },
      {
        column: 'invitation_hash',
        value: faker.random.alphaNumeric(5),
      },
      {
        column: 'email',
        value: user(userID).email,
      },
      {
        column: 'organization_id',
        value: uuid(orgID),
      },
      {
        column: 'user_id',
        // value: uuid(userID),
        value: null,
      },
    ]
  }),
})
