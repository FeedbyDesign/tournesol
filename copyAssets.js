const fs = require('fs')
const request = require("request")
const shell = require('shelljs');

const sourceDir = './assets/admin'
const tragetDir = './public'

if (!fs.existsSync(tragetDir)){
    fs.mkdirSync(tragetDir);
}

// Copy files to release dir
shell.rm('-rf', './public/admin/');
shell.cp('-R', sourceDir, tragetDir);
