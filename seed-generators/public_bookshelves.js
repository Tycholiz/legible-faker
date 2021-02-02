const faker = require('faker')
const generateInsertClause = require('../helpers/generateInsertClause')
const constants = require('../constants')
const uuid = require('../helpers/arbitraryUUID')
const randomize = require('../helpers/randomize')


const tableName = 'app_public.bookshelves'

module.exports = (count) => {
  let allInsertClauses = ''

  for (let i = 0; i < count; i++) {
    const seedData = []

    seedData.push(
      {
        name: 'id',
        value: uuid(i + 1)
      },
      {
        name: 'owner_id',
        value: uuid(randomize(1, constants.count.USERS))
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}
