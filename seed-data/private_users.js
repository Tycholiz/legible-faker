const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const uuid = require('../uuidFormatter')

const tableName = 'app_private.user_secrets'

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
        name: 'email',
        value: faker.internet.email()
      },
      {
        name: 'password_hash',
        value: faker.internet.password()
      },
      {
        name: 'last_login_at',
        value: faker.time.recent()
      },
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}


