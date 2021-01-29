const faker = require('faker')
const generateInsertClause = require('../helpers/generateInsertClause')
const constants = require('../constants')
const uuid = require('../helpers/uuidFormatter')
const randomize = require('../helpers/randomize')


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
        name: 'title',
        value: faker.random.words(4)
      },
      {
        name: 'authors',
        value: '\'{"Anne Hathaway", "Chuck Vance"}\''
      },
      {
        name: 'publish_status',
        value: '\'PUBLISHED\'' 
      },
      {
        name: 'language_code',
        value: '\'eng\''
      },
      {
        name: 'blurbs',
        value: 'null'
      },
      {
        name: 'publisher_id',
        value: uuid(randomize(1, constants.count.ORGS))
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}







