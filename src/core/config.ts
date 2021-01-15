import path from 'path'
//TODO: need add ts interface
const config: any = {
    name: "",
    version: "0.0.1",
    description: "",
    author: "",
    license: "MIT",
    dir: path.resolve("."),
    source: path.join(__dirname, "../../template/webpack"),
    destination: "./build"
}
export default config