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

// vim
exec(`ln -sf ${__dirname}/.vimrc ~/.vimrc`)
exec(`ln -sf ${__dirname}/.vim ~/.vim`)
console.log(`[finished] vim`)

// zsh
exec(`ln -sf ${__dirname}/.zshrc ~/.zshrc`)
console.log(`[finished] zsh`)

// atom
exec(`ln -sf ${__dirname}/.atom/config.cson ~/.atom/config.cson`)
exec(`ln -sf ${__dirname}/.atom/github.cson ~/.atom/github.cson`)
exec(`ln -sf ${__dirname}/.atom/init.coffee ~/.atom/init.coffee`)
exec(`ln -sf ${__dirname}/.atom/keymap.cson ~/.atom/keymap.cson`)
exec(`ln -sf ${__dirname}/.atom/package-list ~/.atom/package-list`)
exec(`ln -sf ${__dirname}/.atom/snippets.cson ~/.atom/snippets.cson`)
exec(`ln -sf ${__dirname}/.atom/styles.less ~/.atom/styles.less`)
console.log(`[finished] atom`)

// apm install
exec('apm install --packages-file .atom/package-list')
console.log('[installed] atom packages')

// npm install
exec(`npm i -g ${npmList}`)
console.log('[installed] npm packages')
