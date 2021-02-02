const faker = require('faker')
const generateInsertClause = require('../helpers/generateInsertClause')
const uuid = require('../helpers/arbitraryUUID')
const randomize = require('../helpers/randomize')


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
        value: 'CA-BC'
      },
      {
        name: 'country_code',
        value: 'CA'
      },
      {
        name: 'currency_code',
        value: 'CAD'
      },
      {
        name: 'price',
        value: randomize(5, 40)
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








