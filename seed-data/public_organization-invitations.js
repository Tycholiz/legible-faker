const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const constants = require('../constants')
const uuid = require('../uuidFormatter')


const tableName = 'app_public.organization_invitations'

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
        name: 'code',
        value: faker.random.alphaNumeric(5)
      },
      {
        name: 'email',
        value: faker.internet.email()
      },
      {
        name: 'organization_id',
        value: uuid(faker.random.number({ min: 1, max: constants.count.ORGS }))
      },
      {
        name: 'user_id',
        value: uuid(faker.random.number({ min: 1, max: constants.count.USERS }))
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}






