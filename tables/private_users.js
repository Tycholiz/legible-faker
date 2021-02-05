const faker = require('faker')
const generateInsertClause = require('../helpers/generateInsertClause')
const uuid = require('../helpers/arbitraryUUID')

const tableName = 'app_private.user_secrets'

module.exports = (count) => {
  let allInsertClauses = ''

  for (let i = 0; i < count; i++) {
    const seedData = []

    seedData.push(
      {
        name: 'user_id',
        value: uuid(i + 1)
      },
      {
        name: 'email',
        value: faker.internet.email()
      },
      {
        name: 'password_hash',
        value: faker.internet.password()
      },
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'
  }
  return allInsertClauses
}


