const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const constants = require('../constants')


const tableName = 'app_public.organization_invitations'

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
        name: 'code',
        value: faker.internet.password()
      }
      {
        name: 'email',
        value: faker.internet.email()
      }
      {
        name: 'organization_id',
        value: faker.random.number({ min: 1, max: constants.count.ORGS })
      }
      {
        name: 'user_id',
        value: faker.random.number({ min: 1, max: constants.count.USERS })
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}






