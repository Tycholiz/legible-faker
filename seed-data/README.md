The output of each function in this module is a series of INSERT statements.
- ex. `public_entities.js` will accept a tableName and a list of columns (array
    of objects). Output will be a series of SQL INSERT statements.

### How convert from decimal to UUID
1. convert the given number to hexadecimal number that is 32 characters long
2. add in the dashes to make it a UUID
