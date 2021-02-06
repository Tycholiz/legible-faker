export function escapeValue(value) {
  if (null == value) return 'NULL'
  if (Number.isFinite(value)) return value.toString()
  if (typeof value === 'boolean') return value ? 'TRUE' : 'FALSE'
  if (Array.isArray(value)) {
    const values = value.map(escapeValue)
    return 'ARRAY[' + values.join(', ') + ']'
  }
  if (value instanceof Date) return escapeValue(value.toISOString().split('T')[0])
  if (typeof value === 'object') {
    return escapeValue(JSON.stringify(value))
  }
  const backslash = ~value.indexOf('\\')
  const prefix = backslash ? 'E' : ''
  value = value.replace(/'/g, "''")
  value = value.replace(/\\/g, '\\\\')
  return prefix + "'" + value + "'"
}