#! /usr/local/bin/node
var fs = require('fs')
var _ = require('underscore')
console.log(_.max([1,2,3,4]))
// console.log(process)
// console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=')
// console.log(process.argv)
// console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=')
// console.log(process.env.USER)
// console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=')
// console.log(process.argv.slice(2).reverse())
var myNotes = fs.readFileSync('./node-notes.txt', 'utf-8')
module.exports = myNotes