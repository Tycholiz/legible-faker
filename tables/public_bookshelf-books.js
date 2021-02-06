import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_bookshelves'
import './public_books'

insert({
  table: 'app_public.bookshelf_books',
  data: iterate(env.BASELINE, (i) => [
    {
      column: 'bookshelf_id',
      value: uuid(i + 1),
    },
    {
      column: 'book_id',
      value: uuid(i + 1),
    },
  ]),
})
