import download from 'download-git-repo'
import path from 'path'

/**
 * @param address git url params format <name>/<repo>
 */
export default (address: string): void => {
    //TODO: 模板生成的文件放入对应的子文件夹中
    const folderName = address.split("/")[1]
    const dest = path.join(__dirname, `../template/${folderName}`)
    download(address, dest, (err: Error) => {
        console.log(err ? err : 'success')
    })
}
