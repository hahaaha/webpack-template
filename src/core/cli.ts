import defaultConfig from './config'
import { Command } from 'commander'
import generate from '../generate'
class webcli {
    config
    program
    constructor() {
        this.config = defaultConfig
        this.program = new Command()
    }
    start() {
        const config = this.config
        const program = this.program
        program.version('0.0.1')

        program
            .option('-d, --debug', 'output extra debugging')
            .option('-g', 'create template')

        program
            .command('create <name>')
            .description("create a project")
            .action((name) => {
                generate(name)
            })

        program.parse(process.argv)

        if (program.debug) console.log(program.opts())

    }
}

export default webcli

