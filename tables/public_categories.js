const faker = require('faker')
const generateInsertClause = require('../helpers/generateInsertClause')
const constants = require('../constants')
const uuid = require('../helpers/arbitraryUUID')


const tableName = 'app_public.categories'

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
        name: 'bisac_code',
        value: 'LAN000938'
      },
      {
        name: 'bic_code',
        value: 'JWKW'
      },
      {
        name: 'thema_code',
        value: 'PNFS'
      },
      {
        name: 'name',
        value: 'Mystery'
      },
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}









