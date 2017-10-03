var fs = require('fs-extra')
var path = require('path')

fs.readdir(__dirname)
  .then((files) => {
    function runTest(directory) {
      console.log(`Start to run test ${directory}`)
      try {
        require(path.join(__dirname, directory, 'test.js'))
      } catch(e) {
        console.log(`Run test ${directory} error: ${e.message}`)
      }
    }

    files = files.filter((file) => {
      return (file !== 'node_modules' && !/^\.(.*)$/.test(file.trim()))
    })
    files.forEach(async (file) => {
      try {
        var stats = await fs.stat(file)
      } catch(e) {
        console.log(`Stat ${file} error: ${e.message}`)
      }
      if (stats.isDirectory()) {
        runTest(file)
      }
    })
  })
  .catch((err) => {
    console.log(`Read directory error: ${err.message}`)
  })