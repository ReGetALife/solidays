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
      list.push([file.substring(0, file.length - 3), obj.what || ('文章-' + file), new Date(obj.when || '2008-8-25')])
    }
  })
  if (!fs.existsSync('src/assets/gen')) {
    fs.mkdirSync('src/assets/gen')
  }
  list.sort((a, b) => b[2] - a[2])
  fs.writeFileSync('src/assets/gen/list.json', JSON.stringify(list))
}

module.exports = generateList
