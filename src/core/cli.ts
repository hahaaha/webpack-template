import defaultConfig from './config'
import { Command } from 'commander'
const program = new Command()
import generate from '../generate'
class webcli {
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

export default webcli

