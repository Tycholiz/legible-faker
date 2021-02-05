const faker = require('faker')
const generateInsertClause = require('../helpers/generateInsertClause')
const uuid = require('../helpers/arbitraryUUID')
const randomize = require('../helpers/randomize')
const constants = require('../constants')


const tableName = 'app_public.book_orders'

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
        name: 'book_id',
        value: uuid(i + 1)
      },
      {
        name: 'purchaser_id',
        value: uuid(randomize(1, constants.count.USERS))
      },
      {
        name: 'recipient_id',
        value: uuid(randomize(1, constants.count.USERS))
      },
      {
        name: 'invoice_item_id',
        value: uuid(i + 1)
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}

