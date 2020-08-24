'use strcit'

const exec = require('child_process').execSync
const npmList = require('./npm-list')

// git
exec(`ln -sf ${__dirname}/.gitconfig ~/.gitconfig`)
console.log(`[finished] git`)

// npm
exec(`ln -sf ${__dirname}/.npmrc ~/.npmrc`)
console.log(`[finished] npm`)

// hyper
exec(`ln -sf ${__dirname}/.hyper.js ~/.hyper.js`)
console.log(`[finished] hyper`)

// zsh
exec(`ln -sf ${__dirname}/.zshrc ~/.zshrc`)
console.log(`[finished] zsh`)

// npm install
exec(`npm i -g ${npmList}`)
console.log('[installed] npm packages')
