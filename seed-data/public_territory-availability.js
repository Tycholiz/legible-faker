const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const constants = require('../constants')


const tableName = 'app_public.territory_availability'

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
        value: faker.random.number({ min: 1, max: constants.count.BOOKS })
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}






