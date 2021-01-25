const express = require('express')
const faker = require('faker');
const fs = require('fs');
const app = express()
const port = 3000

app.get('/seed/all', (req, res) => {

  // What if we used environment variables, so the user could alter the values
  // to fine tune how many of each table they want to get?
  var quantity = req.query.quantity; 

  var script = entities(quantity * 2); // # entites = # users + # organizations, so we have to double it.
  script += '\n';
  script += users(quantity);
  script += '\n';
  script += user_secrets(quantity);
  script += '\n';
  script += payment_profiles(quantity);
  script += '\n';
  script += organizations(quantity);
  script += '\n';
  script += payout_preferences(quantity);
  script += '\n';
  script += organization_memberships(quantity);
  script += '\n';
  script += organization_invitations(quantity);
  script += '\n';
  script += books(quantity);
  script += '\n';
  script += territory_availability(quantity);
  script += '\n';
  script += book_prices(quantity);
  script += '\n';
  script += categories(quantity);
  script += '\n';
  script += book_categories(quantity);
  script += '\n';
  script += collections(quantity);
  script += '\n';
  script += book_collections(quantity);
  script += '\n';
  script += invoices(quantity);
  script += '\n';
  script += invoice_items(quantity);
  script += '\n';
  script += book_orders(quantity);
  script += '\n';
  script += subscription_orders(quantity);

  writeFile('seed-data.sql', script);

  res.send(script);
})

app.listen(port, () => {
  console.log('Autbots...roll out!')
})

// Function that writes the SQL file
writeFile = (fileName, script) => {
	fs.writeFile('seed-data.sql', script, function (err) {
	if (err) return console.log(err);
		console.log('Writing to seed-data.sql');
  });
}

// entities are between 1-100, with users occupying 1-50 and orgs 51-100

entities = (quantity, tableName) => {
	let script = '';

	for (let i = 0; i < quantity; i++) {
      var id = i + 1;
	  var display_name = faker.name.firstName();

	  	script += `INSERT INTO entities (id) VALUES (${id});\n`
	}

	return script;
}

// Function that builds the script
users = (quantity) => {
	let script = '';

	for (let i = 0; i < quantity; i++) {
      var id = i + 1;
	  var display_name = faker.name.firstName();
	  var first_name = faker.name.firstName(); 
	  var last_name = faker.name.lastName();
	  var avatar_url = faker.image.avatar();
	  var is_admin = false;
	  var is_verified = true;
	  var is_active = true;
	  var created_at = new Date();
	  var updated_at = new Date();
      var entity_id = i + 1;

	  	script += 'INSERT INTO users (id, display_name, first_name, last_name, avatar_url, is_admin, is_verified, is_active, created_at, updated_at, entity_id) '+
	  								  'VALUES ('+ id +', \''+ first_name +'\',\''+ first_name +'\', \''+ last_name +'\', \''+ avatar_url +'\', '+ is_admin +', '+ is_verified +', '+ is_active +', \''+ created_at +'\', \''+ updated_at +'\','+ entity_id +');\n'
	}

	return script;
}

// Function that builds the script
user_secrets = (quantity) => {
	let script = '';

	for (let i = 0; i < quantity; i++) {
	  var user_id = i + 1;
	  var email = faker.internet.email();
	  var password_hash = faker.internet.password();
	  var last_login_at = new Date(); 

	  	script += 'INSERT INTO user_secrets (user_id, email, password_hash, last_login_at) '+
	  								  'VALUES ('+ user_id +', \''+ email +'\',\''+ password_hash +'\', \''+ last_login_at +'\');\n'
	}

	return script;
}

// Function that builds the script
payment_profiles = (quantity) => {
	let script = '';

	for (let i = 0; i < quantity; i++) {
	  var id =  i + 1;
	  var user_id = '<<replace>>';
	  var is_primary = true;
	  var temp = faker.random.number().toString();
	  var last_digits = temp.substring(temp.length - 4, temp.length);
	  var billing_address = faker.address.streetAddress();
	  var stripe_id = '<<replace>>';

	  	script += 'INSERT INTO payment_profiles (id, user_id, is_primary, last_digits, billing_address, stripe_id) '+
	  								  'VALUES ('+ id +', '+ user_id +', '+ is_primary +',\''+ last_digits +'\', \''+ billing_address +'\', '+ stripe_id +');\n'
	}

	return script;
}

// Function that builds the script
organizations = (quantity) => {
	let script = '';

    // organizations will count backwards, so there is no clashing with users
    // over entity_id
    var currentId = quantity * 2

	for (let i = 0; i < quantity; i++) {
      var id = currentId;
	  var display_name = faker.company.companyName(); 
	  var slug = display_name.substring(0, 4);
	  var avatar_url = faker.image.avatar();;
	  var is_active = true;
      var owner_id = faker.random.number({
        'min': 1,
        'max': 10
      });
	  var entity_id = currentId;
	  var created_at = new Date();
	  var updated_at = new Date();

      currentId--;

	  	script += 'INSERT INTO organizations (id, display_name, slug, avatar_url, is_active, owner_id, entity_id, created_at, updated_at) '+
	  								  'VALUES ('+ id +', \''+ display_name +'\', \''+ slug +'\',\''+ avatar_url +'\', '+ is_active +', '+ owner_id +', '+ entity_id +', \''+ created_at +'\', \''+ updated_at +'\');\n'
	}

	return script;
}

// Function that builds the script
payout_preferences = (quantity) => {
	let script = '';

    var currentId = quantity * 2

	for (let i = 0; i < quantity; i++) {
      var id = i + 1;
  	  var organization_id = currentId;

      currentId--;

	  	script += 'INSERT INTO payout_preferences (id, organization_id) '+
	  								  'VALUES ('+ id +', '+ organization_id +');\n'
	}

	return script;
}

// Function that builds the script
organization_memberships = (quantity) => {
	let script = '';

    var currentId = quantity * 2

	for (let i = 0; i < quantity; i++) {
	  var id = i + 1;
	  var is_owner = false;
	  var is_billing_contact = false;
	  var organization_id = currentId;
      var user_id = faker.random.number({
        'min': 1,
        'max': 10
      });
	  var created_at = new Date();

      currentId--;

	  	script += 'INSERT INTO organization_memberships (id, is_owner, is_billing_contact, organization_id, user_id, created_at) '+
	  								  'VALUES ('+ id +', '+ is_owner +', '+ is_billing_contact +', '+ organization_id +', '+ user_id +', \''+ created_at +'\');\n'
	}

	return script;
}

// Function that builds the script
organization_invitations = (quantity) => {
	let script = '';

    var currentId = quantity * 2

	for (let i = 0; i < quantity; i++) {
	  var id = i + 1;
	  var code = faker.random.number();
	  var email = faker.internet.email();
      var user_id = faker.random.number({
        'min': 1,
        'max': 10
      });
	  var organization_id = currentId;

      currentId--;

	  	script += 'INSERT INTO organization_invitations (id, code, email, user_id, organization_id) '+
	  								  'VALUES ('+ id +', \''+ code +'\', \''+ email +'\', '+ user_id +', '+ organization_id +');\n'
	}

	return script;
}

// Function that builds the script
books = (quantity) => {
	let script = '';

	let publishState = [ 
		'PUBLISHED', 
	  	'APPROVED',
	  	'DENIED',
	  	'PENDING',
	  	'INCOMPLETE'
	]

	let index = 0;

	for (let i = 0; i < quantity; i++) {

	  index = index === 4 ? 0 : index + 1;

	  var id = i + 1;
      var publisher_id = faker.random.number({
        'min': 1,
        'max': 10
      });
	  var publish_status = publishState[index];
	  var language = 'EN-CA';

	  	script += 'INSERT INTO books (id, publisher_id, publish_status, language) '+
	  								  'VALUES ('+ id +', '+ publisher_id +', \''+ publish_status +'\', \''+ language +'\');\n'
	}

	return script;
}

territory_availability = (quantity) => {
	let script = '';

	for (let i = 0; i < quantity; i++) {

	  var id = i + 1;
	  var region_code = 'NA';
	  var country_code = 'CAD';

	  	script += `INSERT INTO books (id, region_code, country_code) VALUES (${id}, ${region_code}, ${country_code});\n`
	}

	return script;
}

book_prices = (quantity) => {
	let script = '';

	for (let i = 0; i < quantity; i++) {

	  var id = i + 1;
	  var region_code = 'NA';
	  var country_code = 'CAD';
      var currency_code = 'CAD';
      var price = faker.random.number(100)
      var book_id = faker.random.number({
        'min': 1,
        'max': 10
      });

	  	script += `INSERT INTO book_prices (id, region_code, country_code, currency_code, price, book_id) VALUES (${id}, ${region_code}, ${country_code}, ${currency_code}, ${price}, ${book_id});\n`
	}

	return script;
}

categories = (quantity) => {
	let script = '';

	for (let i = 0; i < quantity; i++) {

	  var code = 'SUSPENSE';

	  	script += `INSERT INTO categories (code) VALUES (${code});\n`
	}

	return script;
}

book_categories = (quantity) => {
	let script = '';

	for (let i = 0; i < quantity; i++) {

	  var category_code = 'SUSPENSE';
      var book_id = i + 1;

	  	script += `INSERT INTO book_categories (book_id, category_code) VALUES (${book_id}, ${category_code});\n`
	}

	return script;
}

collections = (quantity) => {
	let script = '';

	for (let i = 0; i < quantity; i++) {

      var id = i + 1;
	  var name = faker.random.words(3);

	  	script += `INSERT INTO collections (id, name) VALUES (${id}, ${name});\n`
	}

	return script;
}

book_collections = (quantity) => {
	let script = '';

	for (let i = 0; i < quantity; i++) {

      var id = i + 1;
      var book_id = i + 1;
      var collection_id = i + 1;
      var chronology = faker.random.number({min: 1, max: 6});

	  	script += `INSERT INTO collections (id, book_id, chronology, collection_id) VALUES (${id}, ${book_id}, ${chronology}, ${collection_id});\n`
	}

	return script;
}

invoices = (quantity) => {
	let script = '';

	for (let i = 0; i < quantity; i++) {

      var id = i + 1;
      var total_price = faker.random.number(100)

	  	script += `INSERT INTO collections (id, total_price) VALUES (${id}, ${total_price});\n`
	}

	return script;
}

invoice_items = (quantity) => {
	let script = '';

	for (let i = 0; i < quantity; i++) {

      var id = i + 1;
      var item_price = faker.random.number(20)
      var invoice_id = i + 1;

	  	script += `INSERT INTO collections (id, item_price, invoice_id) VALUES (${id}, ${item_price}, ${invoice_id});\n`
	}

	return script;
}

book_orders = (quantity) => {
	let script = '';

	for (let i = 0; i < quantity; i++) {

      var id = i + 1;
      var purchaser_id = i + 1;
      var recipient_id = i + 1;
      var invoice_item_id = i + 1;
      var book_id = i + 1;

	  	script += `INSERT INTO collections (id, purchaser_id, recipient_id, invoice_item_id, book_id) VALUES (${id}, ${purchaser_id}, ${recipient_id}, ${invoice_item_id}, ${book_id});\n`
	}

	return script;
}

subscription_orders = (quantity) => {
	let script = '';

	for (let i = 0; i < quantity; i++) {

      var id = i + 1;
      var invoice_item_id = i + 1;
      var user_id = i + 1;

	  	script += `INSERT INTO collections (id, invoice_item_id, user_id) VALUES (${id}, ${invoice_item_id}, ${user_id});\n`
	}

	return script;
}

