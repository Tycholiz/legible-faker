const faker = require('faker');
const fs = require('fs');

const generateSeeds = require('./seed-data')
const count = require('./constants').count
const writeFile = require('./writeFile')

const NUM_ENTITIES = count.USERS + count.ORGS

var script = generateSeeds.entities(NUM_ENTITIES)
script += generateSeeds.users(count.USERS)
script += generateSeeds.users_private(count.USERS)
script += generateSeeds.paymentProfiles(10)
script += generateSeeds.organizations(count.ORGS)
script += generateSeeds.payoutPreferences(20)
script += generateSeeds.organizationMemberships(20)
script += generateSeeds.books(count.BOOKS)
script += generateSeeds.territoryAvailability(count.BOOKS)
script += generateSeeds.bookPrices(count.BOOKS)
script += generateSeeds.categories(1)
script += generateSeeds.bookCategories(20)
script += generateSeeds.collections(count.COLLECTIONS)
script += generateSeeds.bookCollections(60)
script += generateSeeds.bookOrders(60)
script += generateSeeds.subscriptionOrders(60)
script += generateSeeds.invoices(60)
script += generateSeeds.invoiceItems(60)
script += generateSeeds.reading(60)
script += generateSeeds.bookmarks(60)
script += generateSeeds.annotations(60)
script += generateSeeds.acquisitionOfferings(60)
script += generateSeeds.bookshelves(60)
script += generateSeeds.bookshelfCollaborators(60)
script += generateSeeds.bookshelfBooks(60)
script += generateSeeds.socialFollowers(60)
script += generateSeeds.organizationInvitations(20)



writeFile("insert_script", script);



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
console.log(generateSeeds.organizationInvitations(20))


