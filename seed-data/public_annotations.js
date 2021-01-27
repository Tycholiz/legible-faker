const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const uuid = require('../uuidFormatter')


const tableName = 'app_public.annotations'

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
        name: 'reading_id',
        value: uuid(i + 1)
      },
      {
        name: 'name',
        value: '\'' + faker.lorem.word(6) + '\''
      },
      {
        name: 'location',
        value: '\'' + faker.lorem.word(3) + '\''
      },
      {
        name: 'note',
        value: '\'' + faker.lorem.text() + '\''
      },
      {
        name: 'created_at',
        value: '\'' + faker.time.recent() + '\''
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}

