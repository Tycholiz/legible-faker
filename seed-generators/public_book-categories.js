const faker = require('faker')
const generateInsertClause = require('../helpers/generateInsertClause')
const uuid = require('../helpers/uuidFormatter')


const tableName = 'app_public.book_categories'

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
        name: 'category_id',
        value: uuid(1)
      },
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}









