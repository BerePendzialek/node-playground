const fs = require('fs')

module.exports = function read(path) {
  fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.log('ERROR', err)
    } else {
      console.log(data.split('\n').length)
    }
  })
}
