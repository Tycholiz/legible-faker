const faker = require('faker')
const generateInsertClause = require('../helpers/generateInsertClause')
const constants = require('../constants')
const uuid = require('../helpers/arbitraryUUID')
const randomize = require('../helpers/randomize')


const tableName = 'app_public.organizations'

module.exports = (count) => {
  let totalOrgs = constants.count.USERS + count
  let allInsertClauses = ''

  for (let i = 0; i < count; i++) {
    const seedData = []

    const companyName = faker.company.companyName().replace(/'/g, '')

    seedData.push(
      {
        name: 'id',
        value: uuid(i + 1)
      },
      {
        name: 'display_name',
        value: companyName
      },
      {
        name: 'slug',
        value: companyName.substring(0, 4) + randomize(10, 99)
      },
      {
        name: 'avatar_url',
        value: faker.image.avatar()
      },
      {
        name: 'is_active',
        value: true
      },
      {
        name: 'owner_id',
        value: uuid(randomize(1, constants.count.USERS))
      },
      {
        name: 'entity_id',
        value: uuid(totalOrgs - 1) //because the first portion of entities is users and the second is organizations, we need to count backwards
      },
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}



