const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const uuid = require('../uuidFormatter')


const tableName = 'app_public.book_categories'

module.exports = (count) => {
  let allInsertClauses = ''

  for (let i = 0; i < count; i++) {
    const seedData = []

    seedData.push(
      {
        name: 'book_id',
        value: uuid(i + 1)
      },
      {
        name: 'category_code',
        value: '\'SUS\''
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}









