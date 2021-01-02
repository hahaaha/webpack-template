import path from 'path'
const config: any = {
    name: "",
    version: "0.0.1",
    dir: path.resolve("."),
    source: path.join(__dirname, "../template/webpack"),
    destination: "./build"
}
export default config