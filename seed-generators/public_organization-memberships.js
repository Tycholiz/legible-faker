const faker = require('faker')
const generateInsertClause = require('../helpers/generateInsertClause')
const constants = require('../constants')
const uuid = require('../helpers/arbitraryUUID')
const randomize = require('../helpers/randomize')


const tableName = 'app_public.organization_memberships'


module.exports = (count) => {
  let allInsertClauses = ''
  let userCount = constants.count.USERS

  for (let i = 0; i < count; i++) {
    const seedData = []

    seedData.push(
      {
        name: 'id',
        value: uuid(i + 1)
      },
      {
        name: 'is_owner',
        value: false
      },
      {
        name: 'is_billing_contact',
        value: false
      },
      {
        name: 'organization_id',
        // users will either be part of org1 or org2
        value: uuid(randomize(1, 2))
      },
      {
        name: 'user_id',
        value: uuid(userCount--)
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}





