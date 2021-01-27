const fs = require('fs');

module.exports = function writeFile(fileName, script) {
    
      // Function that writes the SQL file
      fs.writeFile(fileName, script, function (err) {
      if (err) return console.log(err);
        console.log('Writing to seed-data.sql');
      });


}