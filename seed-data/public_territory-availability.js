const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const constants = require('../constants')
const uuid = require('../uuidFormatter')


const tableName = 'app_public.territory_availability'

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
        name: 'region_code',
        value: 'NA'
      },
      {
        name: 'country_code',
        value: 'CA'
      },
      {
        name: 'available_from',
        value: faker.time.recent()
      },
      {
        name: 'book_id',
        value: uuid(faker.random.number({ min: 1, max: constants.count.BOOKS }))
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}






