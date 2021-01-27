const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const uuid = require('../uuidFormatter')


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
        value: uuid(i + 1)
      },
      {
        name: 'recipient_id',
        value: uuid(i + 1)
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










