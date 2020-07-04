const {readFile, writeFile} = require('fs');

readFile('./build/contracts/PrivateUP.json', (err, data) => {
  data = JSON.parse(data.toString())
  return writeFile('./src/abi.json', JSON.stringify(data.abi), () => {})
})