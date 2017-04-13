const fs = require('fs')
const request = require("request")

const dir = 'data/ytImgs/'
const ids = ['vJrm0qvdzOA', 'tXKBGhLuOBI']


if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

for (let id of ids) {
  console.log(id);
  const url = 'http://img.youtube.com/vi/' + id + '/maxresdefault.jpg'
  request(url).pipe(fs.createWriteStream(dir + id + '.jpg'))
}
