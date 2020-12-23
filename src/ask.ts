const inquirer = require('inquirer')
const Config = require('./core/config')
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
            .then((answers: any) => {
                const keys = Object.keys(answers)
                keys.forEach(key => {
                    if (key === "name") {
                        const destPath = `${process.cwd()}/${answers[key]}`
                        Config.destination = destPath
                    } else {
                        Config[key] = answers[key]
                    }
                })
                resolve("ok")
            })
    })
}