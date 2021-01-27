const faker = require('faker');
const fs = require('fs');

const generateSeeds = require('./seed-generators')
const count = require('./constants').count
const writeFile = require('./helpers/writeFile')

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

writeFile("seeds.sql", script);
