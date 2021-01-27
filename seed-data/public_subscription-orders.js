const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const constants = require('../constants')
const uuid = require('../uuidFormatter')


const tableName = 'app_public.subscription_orders'

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
        name: 'product_id',
        value: uuid(i + 1)
      },
      {
        name: 'user_id',
        value: uuid(faker.random.number({ min: 1, max: constants.count.USERS }))
      },
      {
        name: 'created_at',
        value: faker.time.recent()
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}
