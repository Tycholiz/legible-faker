const faker = require('faker')
const generateInsertClause = require('../helpers/generateInsertClause')
const constants = require('../constants')
const uuid = require('../helpers/uuidFormatter')


const tableName = 'app_public.organizations'

module.exports = (count) => {
  let totalOrgs = constants.count.USERS + count
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
        value: '\'' + faker.company.companyName() + '\''
      },
      {
        name: 'slug',
        value: '\'' + faker.company.companyName().substring(0, 4) + '\''
      },
      {
        name: 'avatar_url',
        value: '\'' + faker.image.avatar() + '\''
      },
      {
        name: 'is_active',
        value: true
      },
      {
        name: 'owner_id',
        value: uuid(faker.random.number({ min: 1, max: count.USERS }))
      },
      {
        name: 'parent_org_id',
        value: '\'null\''
      },
      {
        name: 'entity_id',
        value: uuid(totalOrgs--) //because the first portion of entities is users and the second is organizations, we need to count backwards
      },
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}



