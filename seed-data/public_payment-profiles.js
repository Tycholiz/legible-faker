const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')


const tableName = 'app_public.payment_profiles'

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
        name: 'user_id',
        value: faker.random.number({ min: 1, max: count })
      },
      {
        name: 'is_primary',
        value: false
      },
      {
        name: 'last_digits',
        value: faker.random.number({ min: 1000, max: 9999 })
      },
      {
        name: 'billing_address',
        value: '123 Fake Street'
      },
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}

