const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const constants = require('../constants')


const tableName = 'app_public.book_collections'

module.exports = (count) => {
  let allInsertClauses = ''

  for (let i = 0; i < count; i++) {
    const seedData = []

    seedData.push(
      {
        name: 'id',
        value: i + 1
      },
      {
        name: 'book_id',
        value: i + 1
      },
      {
        name: 'chronology',
        value: faker.random.number({ min: 1, max: 10 })
      },
      {
        name: 'collection_id',
        value: faker.random.number({ min: 1, max: constants.count.COLLECTIONS })
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}









