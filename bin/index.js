#! /usr/bin/env node
const {Command } =  require('commander')
const Metalsmith = require('metalsmith')
const inquirer = require('inquirer')
const program = new Command()
const data = require('./data.js')
const generate = require('./generate.js')
program.version('0.0.1')

program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'fklavour of pizza')
  .option('-g', 'create template')

  program.parse(process.argv)

if(program.debug) console.log(program.opts())

if(program.g) {
// data.name = "bda"
// console.log(data)
      generate()
  // Metalsmith('./')
  //   .source('template/webpack')
  //   .build((err) => {
  //     if(err) throw err
  //     console.log('build finsished')
  //   })
}
