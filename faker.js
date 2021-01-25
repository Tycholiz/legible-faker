const faker = require('faker');
const fs = require('fs');

const generateSeeds = require('./seed-data')
const count = require('./constants').count


const NUM_ENTITIES = count.USERS + count.ORGS

console.log(generateSeeds.entities(NUM_ENTITIES))
console.log(generateSeeds.users(count.USERS))
console.log(generateSeeds.users_private(count.USERS))
console.log(generateSeeds.paymentProfiles(10))
console.log(generateSeeds.organizations(count.ORGS))
console.log(generateSeeds.payoutPreferences(20))
console.log(generateSeeds.organizationMemberships(20))
console.log(generateSeeds.books(count.BOOKS))
console.log(generateSeeds.territoryAvailability(count.BOOKS))
console.log(generateSeeds.bookPrices(count.BOOKS))
console.log(generateSeeds.categories(1))
console.log(generateSeeds.bookCategories(20))
console.log(generateSeeds.collections(count.COLLECTIONS))
console.log(generateSeeds.bookCollections(60))
console.log(generateSeeds.bookOrders(60))
console.log(generateSeeds.subscriptionOrders(60))
console.log(generateSeeds.invoices(60))
console.log(generateSeeds.invoiceItems(60))
console.log(generateSeeds.reading(60))
console.log(generateSeeds.bookmarks(60))
console.log(generateSeeds.annotations(60))
console.log(generateSeeds.acquisitionOfferings(60))
console.log(generateSeeds.bookshelves(60))
console.log(generateSeeds.bookshelfCollaborators(60))
console.log(generateSeeds.bookshelfBooks(60))
console.log(generateSeeds.socialFollowers(60))

