import * as shell from "shelljs"

shell.rm("-rf", "dist/template/")
shell.cp("-R", "template", "dist/template/")