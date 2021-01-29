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

// TODO: right now this one must be less than #users because of
// public_organization-memberships:36 (if more, then we will start to see
// negative ids
script += generateSeeds.organizationMemberships(10)
script += generateSeeds.books(count.BOOKS)
script += generateSeeds.territoryAvailability(count.BOOKS)
script += generateSeeds.bookPrices(count.BOOKS)
script += generateSeeds.categories(1)
script += generateSeeds.bookCategories(20)
script += generateSeeds.collections(count.COLLECTIONS)
script += generateSeeds.bookCollections(20)
script += generateSeeds.invoices(20)
script += generateSeeds.invoiceItems(20)
script += generateSeeds.bookOrders(20)
script += generateSeeds.subscriptionOrders(20)
script += generateSeeds.reading(20)
script += generateSeeds.bookmarks(20)
script += generateSeeds.annotations(20)
script += generateSeeds.acquisitionOfferings(20)
script += generateSeeds.bookshelves(count.BOOKSHELVES)
script += generateSeeds.bookshelfCollaborators(20)
script += generateSeeds.bookshelfBooks(20)
script += generateSeeds.socialFollowers(15)
script += generateSeeds.organizationInvitations(5)

writeFile("seeds.sql", script);
