const faker = require('faker');
const fs = require('fs');

const generateSeeds = require('./seed-generators')
const count = require('./constants').count
const writeFile = require('./helpers/writeFile')

const NUM_ENTITIES = count.USERS + count.ORGS

var script = 'BEGIN;\n'
script += generateSeeds.entities(NUM_ENTITIES)
script += 'SAVEPOINT entities;\n'
script += generateSeeds.users(count.USERS)
script += 'SAVEPOINT users;\n'
script += generateSeeds.users_private(count.USERS)
script += 'SAVEPOINT users_private;\n'
script += generateSeeds.paymentProfiles(10)
script += 'SAVEPOINT payment_profiles;\n'
script += generateSeeds.organizations(count.ORGS)
script += 'SAVEPOINT organizations;\n'
script += generateSeeds.payoutPreferences(20)
script += 'SAVEPOINT payout_preferences;\n'

// TODO: right now this one must be less than #users because of
// public_organization-memberships:36 (if more, then we will start to see
// negative ids
script += generateSeeds.organizationMemberships(10)
script += 'SAVEPOINT organization_membership;\n'
script += generateSeeds.books(count.BOOKS)
script += 'SAVEPOINT books;\n'
script += generateSeeds.territoryAvailability(count.BOOKS)
script += 'SAVEPOINT territory_availability;\n'
script += generateSeeds.bookPrices(count.BOOKS)
script += 'SAVEPOINT book_prices;\n'
script += generateSeeds.categories(1)
script += 'SAVEPOINT categories;\n'
script += generateSeeds.bookCategories(20)
script += 'SAVEPOINT book_categories;\n'
script += generateSeeds.collections(count.COLLECTIONS)
script += 'SAVEPOINT collections;\n'
script += generateSeeds.bookCollections(20)
script += 'SAVEPOINT book_collections;\n'
script += generateSeeds.invoices(20)
script += 'SAVEPOINT invoices;\n'
script += generateSeeds.invoiceItems(20)
script += 'SAVEPOINT invoice_items;\n'
script += generateSeeds.bookOrders(20)
script += 'SAVEPOINT book_orders;\n'
script += generateSeeds.subscriptionOrders(20)
script += 'SAVEPOINT subscription_orders;\n'
script += generateSeeds.reading(20)
script += 'SAVEPOINT reading;\n'
script += generateSeeds.bookmarks(20)
script += 'SAVEPOINT bookmarks;\n'
script += generateSeeds.annotations(20)
script += 'SAVEPOINT annotations;\n'
script += generateSeeds.acquisitionOfferings(20)
script += 'SAVEPOINT acquisition_offerings;\n'
script += generateSeeds.bookshelves(count.BOOKSHELVES)
script += 'SAVEPOINT bookshelves;\n'
script += generateSeeds.bookshelfCollaborators(20)
script += 'SAVEPOINT bookshelf_collaborators;\n'
script += generateSeeds.bookshelfBooks(20)
script += 'SAVEPOINT bookshelf_books;\n'
script += generateSeeds.socialFollowers(15)
script += 'SAVEPOINT social_followers;\n'
script += generateSeeds.organizationInvitations(5)
script += 'COMMIT;'

writeFile("seeds.sql", script);
