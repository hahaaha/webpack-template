const Metalsmith = require('metalsmith')
const Handlebars = require('handlebars')
const ask = require('./ask')
const config = require('./core/config')

module.exports = async function generate() {
    await ask()
    Metalsmith(config.dir)
        .source(config.source)
        .destination(config.destination)
        .clean(false)
        .use(template)
        .build(err => {
            if (err) throw err
            console.log('build finsished')
        })

    function template(files, metalsmith, done) {
        const data = {
            name: config.name,
            version: config.version
        }
        const source = files['package.json'].contents.toString()
        const template = Handlebars.compile(source)
        const res = template(data)
        files['package.json'].contents = new Buffer.from(res)
        done()
    }
}
