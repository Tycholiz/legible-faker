import { promises as fs } from 'fs'

import dotenv from 'dotenv'
import dotenvParseVariables from 'dotenv-parse-variables'

import { escapeValue } from './helpers/escapeValue'

let parsedEnv = dotenv.config({})
if (parsedEnv.error) throw parsedEnv.error
parsedEnv = dotenvParseVariables(parsedEnv.parsed)

export const env = parsedEnv

const buffer = []

export const insert = (statements) => {
  buffer.push(statements)
}

export const iterate = (count, callback) =>
  [...Array(count)].map((_, i) => callback(i))

// Start seeding!
;(async () => {
  const files = await fs.readdir('./tables')
  for (const file of files) {
    await import(`./tables/${file}`)
  }

  const queries = buffer.map(({ table, data }) => {
    return {
      savepoint: table.replace('.', '_'),
      statements: data.map((row) => {
        const columns = row.map((cell) => cell.column).join(', ')
        const values = row
          .map((cell) => cell.raw || escapeValue(cell.value))
          .join(', ')

        return `INSERT INTO ${table} (${columns}) VALUES (${values});`
      }),
    }
  })

  const sql = queries
    .map(
      (query) =>
        `\n${query.statements.join('\n')}\nSAVEPOINT ${query.savepoint};\n`,
    )
    .join('')

  process.stdout.write(`BEGIN;\n${sql}\nCOMMIT;\n`)
})()
