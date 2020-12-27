import inquirer from 'inquirer'
import Config from './core/config'

export default () => {
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
                console.log(Config)
                keys.forEach(key => {
                    if (key === "name") {
                        const destPath = `${process.cwd()}/${answers[key]}`
                        Config.destination = destPath
                    }
                    Config[key] = answers[key]
                })
                resolve("ok")
            })
    })
}