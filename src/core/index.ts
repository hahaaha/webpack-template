const defaultConfig = require('./config')
const { Command } = require('commander')
const program = new Command()
const generate = require('../generate')
class cli {
    config
    constructor() {
        this.config = defaultConfig
    }
    start() {
        const config = this.config
        program.version('0.0.1')

        program
            .option('-d, --debug', 'output extra debugging')
            .option('-g', 'create template')

        program.parse(process.argv)

        if (program.debug) console.log(program.opts())

        if (program.g) {
            generate()
        }

    }
}

module.exports = cli

