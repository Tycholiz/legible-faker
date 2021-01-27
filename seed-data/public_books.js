const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const constants = require('../constants')
const uuid = require('../uuidFormatter')


const tableName = 'app_public.books'

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
        name: 'publish_status',
        value: 'PUBLISHED'
      },
      {
        name: 'language_code',
        value: 'EN-CA'
      },
      {
        name: 'blurbs',
        value: null
      },
      {
        name: 'publisher_id',
        value: uuid(faker.random.number({ min: 1, max: constants.count.ORGS }))
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}







