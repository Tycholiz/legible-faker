// columns format:
// [
//   {
//     name: 'id',
//     value: 1,
//   },
//   {
//     name: 'first_name',
//     value: 'Donny'
//   }
// ]

module.exports = function generateInsertClause(table, columns) {
  // 1. generate insert portion
  const insertIntoPart = `INSERT INTO ${table}`

  // generate column name portion
  const columnNames = columns.map(column => {
    return column.name
  })
  // 2. morph into SQL syntax
  const columnNamePart = `${columnNames.toString()}`

  const columnValues = columns.map(column => {
    return column.value
  })
  // 3. morph into SQL syntax
  const columnValuePart = `${columnValues.toString()}`

  const fullSqlStatement = `${insertIntoPart}(${columnNamePart}) VALUES (${columnValuePart});\n`

  return fullSqlStatement
}
