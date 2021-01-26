import fs from 'fs'
import path from 'path'

const gen = path.join(__dirname, "../config.json")

interface userConfig {
    repo: string[]
}

const config: userConfig = {
    repo: []
}
/**
 * 将content中的内容写入到gen文件中
 * @param {userConfig} content 需要写入的配置文件的内容
 */
const w = (configContent: userConfig = config) => {
    const content = JSON.stringify(configContent)
    fs.writeFile(gen, content, (err) => {
        if (err) console.log(err)
    })
}

/**
 * 读取gen文件里的内容，如果gen文件存在先创建
 */
const r = (): userConfig => {
    if (!fs.existsSync(gen)) {
        w()
    }
    const content = fs.readFileSync(gen)
    return JSON.parse(content.toString())
}

export { w, r }
