const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const uuid = require('../uuidFormatter')


const tableName = 'app_public.book_prices'

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
        value: '\'NA\'' 
      },
      {
        name: 'country_code',
        value: '\'CA\''
      },
      {
        name: 'currency_code',
        value: '\'CAD\''
      },
      {
        name: 'price',
        value: faker.random.number({ min: 5, max: 40 }) //TODO: we want this to work with postgres' money type so we can work in dollars and cents
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








