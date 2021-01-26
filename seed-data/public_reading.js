const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const constants = require('../constants')


const tableName = 'app_public.reading'

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
        name: 'last_location',
        value: faker.lorem.words(3)
      },
      {
        name: 'last_read',
        value: faker.lorem.words(3)
      },
      {
        name: 'duration',
        value: faker.random.number({ min: 5, max: 40 })
      },
      {
        name: 'user_id',
        value: i + 1,
      },
      {
        name: 'book_id',
        value: i + 1,
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}
