var fs = require('fs')
var argv = require('yargs').argv
require('dotenv').config();

const environment = (argv.environment) || "";
const isProd = environment === 'prod';
//node env.js --sourcePath="./src/environments/environment.template.ts" --targetPath="./src/environments/environment.prod.ts"
if (environment) { environment = "." + environment }
const sourcePath = argv.sourcePath
const targetPath = argv.targetPath

var envConfigFile = fs.readFileSync(sourcePath).toString()
for (envvar of Object.keys(process.env)) {
    var result = process.env[envvar].replace(/\\/g, "\\\\")
    envConfigFile = envConfigFile.replace("(process.env." + envvar + ")", "\"" + result + "\"")
}
fs.writeFileSync(targetPath, envConfigFile)

console.log(`Output generated at ${targetPath}`);