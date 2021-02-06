import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_organizations'

insert({
  table: 'app_public.books',
  data: iterate(env.BOOKS, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'identifier_code',
      value: 'ISBN-RANDOM',
    },
    {
      column: 'title',
      value: faker.random.words(4),
    },
    {
      column: 'authors',
      value: ['Anne Hathaway', 'Chuck Vance'],
    },
    {
      column: 'publish_status',
      value: 'PUBLISHED',
    },
    {
      column: 'language_code',
      value: 'eng',
    },
    {
      column: 'blurbs',
      value: null,
    },
    {
      column: 'publisher_id',
      value: uuid(faker.random.number({ min: 1, max: env.ORGS })),
    },
  ]),
})
