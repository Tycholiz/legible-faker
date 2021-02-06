import faker from 'faker'

import { env, insert, iterate } from '../main'
import { uuid } from '../helpers/uuid'

import './public_bookshelves'
import './public_users'

const users = [...Array(env.USERS).keys()]
const userGroupsSize = 3

//Taken from https://stackoverflow.com/a/56763252
const splitEvery = (n, xs, y = []) =>
  xs.length === 0 ? y : splitEvery(n, xs.slice(n), y.concat([xs.slice(0, n)]))

const userGroups = splitEvery(userGroupsSize, users)

insert({
  table: 'app_public.bookshelf_collaborators',
  data: Array.prototype.concat(
    ...userGroups.map((users, bookshelf) =>
      users.map((user) => [
        {
          column: 'bookshelf_id',
          value: uuid(bookshelf + 1),
        },
        {
          column: 'user_id',
          value: uuid(user + 1),
        },
      ]),
    ),
  ),
})
