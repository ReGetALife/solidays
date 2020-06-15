import fs from 'fs'
import path from 'path'
import resolveMd from './resolveMd'

function generateList () {
  const list = []
  const dirPath = path.resolve('static/article')
  const files = fs.readdirSync(dirPath)
  files.forEach(function (file) {
    const filePath = path.join(dirPath, file)
    if (fs.statSync(filePath).isFile()) {
      const obj = resolveMd(fs.readFileSync(filePath).toString())
      list.push([file.substring(0, file.length - 3), obj.what || ('文章' + file)])
    }
  })
  if (!fs.existsSync('assets/gen')) {
    fs.mkdirSync('assets/gen')
  }
  fs.writeFileSync('assets/gen/list.json', JSON.stringify(list.reverse()))
}

export default generateList
