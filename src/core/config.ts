import path from 'path'
//TODO: need add ts interface
interface config {
    name: string,
    version: string,
    description: string,
    author: string,
    license: string,
    dir: string,
    source: string,
    destination: string
}
const config: config = {
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