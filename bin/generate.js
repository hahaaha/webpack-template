const Metalsmith = require('metalsmith')
const inquirer = require('inquirer')
const Handlebars = require('handlebars')

module.exports = function generate() {
    Metalsmith('./')
        .source('template/webpack')
        .use(ask)
        .use(template)
        .build(err => {
            if (err) throw err
            console.log('build finsished')
        })

    function ask(files, metalsmith, done) {
        const metadata = metalsmith.metadata()
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: `input project name`,
                },
                {
                    type: 'input',
                    name: 'version',
                    message: 'project version',
                },
            ])
            .then(answers => {
                const keys = Object.keys(answers)
                keys.forEach(v => {
                    metadata[v] = answers[v]
                })
                done()
            })
    }

    function template(files, metalsmith, done) {
        const metadata = metalsmith.metadata()
        const source = files['package.json'].contents.toString()
        const template = Handlebars.compile(source)
        const res = template(metadata)
        console.log(res)
        files['package.json'].contents = new Buffer.from(res)
        done()
    }
}
