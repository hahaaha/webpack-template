import download from 'download-git-repo'
import path from 'path'

/**
 * @param address git url params format <name>/<repo>
 */
export default (address: string): Promise<string> => {
    return new Promise((resolve) => {
        const folderName = address.split("/")[1]
        const dest = path.join(__dirname, `../template/${folderName}`)
        download(address, dest, (err: Error) => {
            if (err) {
                console.log("地址不存在")
                resolve("404")
            } else {
                resolve("ok")
            }
        })
    })

}
