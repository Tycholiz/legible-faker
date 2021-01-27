const faker = require('faker')
const generateInsertClause = require('../helpers/generateInsertClause')
const uuid = require('../helpers/uuidFormatter')


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
        // names with single quotes won't place nicely with SQL, so remove them
        value: '\'' + faker.name.findName().replace(/'/g, '') + '\''
      },
      {
        name: 'first_name',
        value: '\'' + faker.name.firstName().replace(/'/g, '') + '\''
      },
      {
        name: 'last_name',
        value: '\'' + faker.name.lastName().replace(/'/g, '') + '\''
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
