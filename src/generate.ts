const Metalsmith = require('metalsmith')
const Handlebars = require('handlebars')
const ask = require('./ask')
const config = require('./core/config')

module.exports = async function generate() {
    await ask()
    Metalsmith(config.dir)
        .source(config.source)
        .destination(config.destination)
        .use(template)
        .clean(false)
        .build((err: any) => {
            if (err) throw err
            console.log('build finsished')
        })

    function template(files: any, metalsmith: any, done: any) {
        const data = {
            name: config.name,
            version: config.version
        }
        const source = files['package.json'].contents.toString()
        const template = Handlebars.compile(source)
        const res = template(data)
        files['package.json'].contents = Buffer.from(res)
        done()
    }
}
