const fs = require('fs')
const path = require('path')
const resolveMd = require('./resolveMd')

function generateList () {
  const list = []
  const dirPath = path.resolve('public/article')
  const files = fs.readdirSync(dirPath)
  files.forEach(function (file) {
    const filePath = path.join(dirPath, file)
    if (fs.statSync(filePath).isFile()) {
      const obj = resolveMd(fs.readFileSync(filePath).toString())
      list.push([file.substring(0, file.length - 3), obj.what || ('文章' + file)])
    }
  })
  if (!fs.existsSync('src/assets/gen')) {
    fs.mkdirSync('src/assets/gen')
  }
  fs.writeFileSync('src/assets/gen/list.json', JSON.stringify(list.reverse()))
}

module.exports = generateList
