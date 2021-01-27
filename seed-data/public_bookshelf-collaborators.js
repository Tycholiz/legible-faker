const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const uuid = require('../uuidFormatter')


const tableName = 'app_public.bookshelf_collaborators'

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
        name: 'user_id',
        value: uuid(i + 1)
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}
