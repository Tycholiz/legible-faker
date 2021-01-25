const faker = require('faker')
const generateInsertClause = require('../generateInsertClause')
const constants = require('../constants')


const tableName = 'app_public.book_categories'

module.exports = (count) => {
  let allInsertClauses = ''

  for (let i = 0; i < count; i++) {
    const seedData = []

    seedData.push(
      {
        name: 'book_id',
        value: i + 1
      },
      {
        name: 'category_code',
        value: 'SUS'
      }
    )

    allInsertClauses += generateInsertClause(tableName, seedData)
    allInsertClauses += '\n'

  }
  return allInsertClauses
}









