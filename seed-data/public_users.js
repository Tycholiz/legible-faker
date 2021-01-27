const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const uuid = require('../uuidFormatter')


const tableName = 'app_public.users'

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
        name: 'display_name',
        value: '\'' + faker.name.findName() + '\''
      },
      {
        name: 'first_name',
        value: '\'' + faker.name.firstName() + '\''
      },
      {
        name: 'last_name',
        value: '\'' + faker.name.lastName() + '\''
      },
      {
        name: 'is_admin',
        value: false
      },
      {
        name: 'is_active',
        value: true
      },
      {
        name: 'entity_id',
        value: uuid(i + 1)
      },
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}
