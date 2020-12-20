const inquirer = require('inquirer')
const config = require('./core/config')
module.exports = () => {
    return new Promise((resolve) => {
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
                keys.forEach(key => {
                    if (key === "name") {
                        const destPath = `${process.cwd()}/${answers[key]}`
                        config.destination = destPath
                    } else {
                        config[key] = answers[key]
                    }
                })
                resolve()
            })
    })
}
// function (files, metalsmith, done) {
//     const metadata = metalsmith.metadata()
//     inquirer
//         .prompt([
//             {
//                 type: 'input',
//                 name: 'name',
//                 message: `input project name`,
//             },
//             {
//                 type: 'input',
//                 name: 'version',
//                 message: 'project version',
//             },
//         ])
//         .then(answers => {
//             const keys = Object.keys(answers)
//             keys.forEach(key => {
//                 metadata[key] = answers[key]
//                 config[key] = answers[key]
//                 if (key === "name") {
//                     const destPath = `./${answers[key]}`
//                     metalsmith.__destination = destPath
//                 }
//             })
//             done()
//         })
// }