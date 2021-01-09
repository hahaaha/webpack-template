import inquirer from 'inquirer'
import config from './core/config'
/**
 * @param name 默认项目名称
 */
export default (name: string) => {
    return new Promise((resolve) => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: `input project name`,
                    default: name
                },
                {
                    type: 'input',
                    name: 'description',
                    message: 'project descript'
                },
                {
                    type: 'input',
                    name: 'version',
                    message: 'project version',
                    default: '1.0.0'
                },
                {
                    type: 'input',
                    name: 'author',
                    message: 'project author'
                },
                {
                    type: 'input',
                    name: 'license',
                    default: 'MIT'
                }
            ])
            .then((answers: any) => {
                const keys = Object.keys(answers)
                keys.forEach((key) => {
                    if (key === "name") {
                        const destPath = `${process.cwd()}/${answers[key]}`
                        config.destination = destPath
                    }
                    config[key] = answers[key]
                })
                resolve("ok")
            })
    })
}
