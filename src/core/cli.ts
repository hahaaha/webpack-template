import defaultConfig from './config'
import { Command } from 'commander'
import generate from '../generate'
import pkg from '../../package.json'
import clone from '../gitClone'
import path from 'path'
import { r, w } from '../utils'
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
        const version = pkg.version
        program.version(version)

        program
            .option('-d, --debug', 'output extra debugging')
            .option('-g', 'create template')

        program
            .command('create <template> <name>')
            .description("根据相应的模板选择相应的项目")
            .action((template, name) => {
                config.source = path.join(config.source, `../${template}`)
                generate(name)
            })

        // TODO: 每次重装都会清理掉模板，需要解决
        program
            .command('set <address>')
            .description('设置新的模板')
            .action(async (address) => {
                const msg = await clone(address)
                if (msg === "ok") {
                    const config = r()
                    const repo = config.repo
                    repo.push(address)
                    w(config)
                }
            })

        program.parse(process.argv)

        if (program.debug) console.log(program.opts())

    }
}

export default webcli

