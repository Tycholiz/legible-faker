import faker from 'faker'

export const user = (seed) => {
  faker.seed(seed)
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()

  const fullName = faker.name.findName(firstName, lastName)
  const username = faker.internet.userName(firstName, lastName).substring(0, 15)
  const email = faker.internet.email(firstName, lastName)
  faker.seed()

  return {
    firstName,
    lastName,
    fullName,
    username,
    email,
  }
}
