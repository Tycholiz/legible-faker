const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const constants = require('../constants')


const tableName = 'app_public.bookmarks'

module.exports = (count) => {
  let allInsertClauses = ''

  for (let i = 0; i < count; i++) {
    const seedData = []

    seedData.push(
      {
        name: 'id',
        value: i + 1,
      },
      {
        name: 'reading_id',
        value: i + 1,
      },
      {
        name: 'name',
        value: faker.lorem.words(15)
      },
      {
        name: 'location',
        value: faker.lorem.words(3)
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

