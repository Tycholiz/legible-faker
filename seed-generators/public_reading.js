const faker = require('faker')
const generateInsertClause = require('../helpers/generateInsertClause')
const constants = require('../constants')
const uuid = require('../helpers/uuidFormatter')


const tableName = 'app_public.reading'

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
        name: 'last_location',
        value: '\'' + faker.lorem.word(3) + '\''
      },
      {
        name: 'last_read',
        value: '\'' + faker.lorem.word(3) + '\''
      },
      {
        name: 'duration',
        value: faker.random.number({ min: 5, max: 40 })
      },
      {
        name: 'user_id',
        value: uuid(faker.random.number({ min: 1, max: constants.count.USERS }))
      },
      {
        name: 'book_id',
        value: uuid(faker.random.number({ min: 1, max: constants.count.BOOKS }))
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}
