import Metalsmith from 'metalsmith'
import Handlebars from 'handlebars'
import ask from './ask'
import config from './core/config'
/**
 * 生成项目结构
 * @param name 默认的项目名称
 */
export default async function generate(name: string): Promise<void> {
    await ask(name)

    Metalsmith(config.dir)
        .source(config.source)
        .destination(config.destination)
        .clean(false)
        .use(template)
        .build((err: Error) => {
            if (err) throw err
            console.log('build finsished')
        })

    function template(files: string[], metalsmith, done): void {
        const data = {
            name: config.name,
            version: config.version,
            description: config.description,
            author: config.author,
            license: config.license
        }
        const source = files['package.json'].contents.toString()
        const template = Handlebars.compile(source)
        const res = template(data)
        files['package.json'].contents = Buffer.from(res)
        done()
    }
}
