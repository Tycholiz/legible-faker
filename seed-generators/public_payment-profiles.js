const faker = require('faker')
const generateInsertClause = require('../helpers/generateInsertClause')
const uuid = require('../helpers/uuidFormatter')
const randomize = require('../helpers/randomize')


const tableName = 'app_public.payment_profiles'

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
        name: 'user_id',
        value: uuid(randomize(1, count))
      },
      {
        name: 'is_primary',
        value: false
      },
      {
        name: 'last_digits',
        value: randomize(1000, 9999)
      },
      {
        name: 'billing_address',
        value: '\'123 Fake Street\''
      },
      {
        name: 'stripe_code',
        value: `'${faker.internet.password()}'`
      },
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}

