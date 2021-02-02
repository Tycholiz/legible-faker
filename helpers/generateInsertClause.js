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

function escapeValue(value) {
  if (null == value) return 'NULL'
  if (Number.isFinite(value)) return value.toString()
  if (typeof value === 'boolean') return value ? 'TRUE' : 'FALSE'
  if (Array.isArray(value)) {
    const values = value.map(escapeValue)
    return 'ARRAY[' + values.join(', ') + ']'
  }
  if (value instanceof Date) return value.toISOString();
  if (typeof value === 'object') {
    return escapeValue(JSON.stringify(value))
  }
  const backslash = ~value.indexOf('\\')
  const prefix = backslash ? 'E' : ''
  value = value.replace(/'/g, "''")
  value = value.replace(/\\/g, '\\\\')
  return prefix + "'" + value + "'"
}

module.exports = function generateInsertClause(table, columns) {
  // 1. generate insert portion
  const insertIntoPart = `INSERT INTO ${table}`

  // generate column name portion
  const columnNames = columns.map((column) => {
    return column.name
  })
  // 2. morph into SQL syntax
  const columnNamePart = `${columnNames.join(', ')}`

  const columnValues = columns.map((column) => {
    return escapeValue(column.value)
  })
  // 3. morph into SQL syntax
  const columnValuePart = `${columnValues.join(', ')}`

  const fullSqlStatement = `${insertIntoPart}(${columnNamePart}) VALUES (${columnValuePart});\n`

  return fullSqlStatement
}
