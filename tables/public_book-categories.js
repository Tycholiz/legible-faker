import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_books'
import './public_categories'

insert({
  table: 'app_public.book_categories',
  data: iterate(env.BASELINE, (i) => [
    {
      column: 'id',
      value: uuid(i + 1),
    },
    {
      column: 'book_id',
      value: uuid(i + 1),
    },
    {
      column: 'category_id',
      value: uuid(1),
    },
  ]),
})
