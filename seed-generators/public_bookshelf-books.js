const faker = require('faker')
const generateInsertClause = require('../helpers/generateInsertClause')
const uuid = require('../helpers/arbitraryUUID')


const tableName = 'app_public.bookshelf_books'

module.exports = (count) => {
  let allInsertClauses = ''

  for (let i = 0; i < count; i++) {
    const seedData = []

    seedData.push(
      {
        name: 'bookshelf_id',
        value: uuid(i + 1)
      },
      {
        name: 'book_id',
        value: uuid(i + 1)
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}
