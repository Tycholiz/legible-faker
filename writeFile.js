const fs = require('fs');

module.exports = function writeFile(fileName, script) {
    
      
      fs.writeFile(fileName, script, function (err) {
      if (err) return console.log(err);
        console.log('Writing to seed-data.sql');
      });


}