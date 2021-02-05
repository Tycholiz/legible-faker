const faker = require('faker')
const generateInsertClause = require('../helpers/generateInsertClause')
const uuid = require('../helpers/arbitraryUUID')
const constants = require('../constants')


const tableName = 'app_public.bookshelf_collaborators'

module.exports = (count) => {
  let allInsertClauses = ''

  let userCount = constants.count.USERS
  let bookshelfCount = constants.count.BOOKSHELVES

  for (let i = 0; i < count; i++) {
    const seedData = []

    seedData.push(
      {
        name: 'bookshelf_id',
        value: uuid(bookshelfCount--)
      },
      {
        name: 'user_id',
        value: uuid(userCount--)
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}
