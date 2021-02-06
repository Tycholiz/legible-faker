import crypto from 'crypto'

const md5 = (input) => crypto.createHash('md5').update(`${input}`).digest('hex')

const md5ToUUID = (digest) => {
  return `${digest.substring(0, 8)}-${digest.substring(
    8,
    12,
  )}-${digest.substring(12, 16)}-${digest.substring(16, 20)}-${digest.substring(
    20,
  )}`
}

export const uuid = (input) => md5ToUUID(md5(input))
