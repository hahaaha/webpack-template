const async = require('async')
const Metalsmith = require('metalsmith')
const inquirer = require('inquirer')
const render = require('consolidate').handlebars.render

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
                // answers.forEach((index,value) => {
                //     console.log(index)
                // })
                console.log(answers)
                const keys = Object.keys(answers)
                keys.forEach(v => {
                    metadata[v] = answers[v]
                })
                done()
            })
    }

    function template(files, metalsmith, done) {
        var keys = Object.keys(files)
        var metadata = metalsmith.metadata()

        async.each(keys, run, done)

        function run(file, done) {
            var str = files[file].contents.toString()
            render(str, metadata, function (err, res) {
                if (err) return done(err)
                files[file].contents = new Buffer(res)
                done()
            })
        }
    }
}
