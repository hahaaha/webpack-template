import Metalsmith from 'metalsmith'
import Handlebars from 'handlebars'
import ask from './ask'
import config from './core/config'
// import download from 'download-git-repo'

export default async function generate() {
    await ask()
    // download('litten/hexo-theme-yilia', 'clitest1', (err: any) => {
    //     console.log(err)
    //     console.log("download")
    // })
    Metalsmith(config.dir)
        .source(config.source)
        .destination(config.destination)
        .clean(false)
        .use(template)
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
