/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const exec = require('child_process').execSync
const conf = require('..')

const file = `${__dirname}/eslint.json`

fs.writeFileSync(file, JSON.stringify(conf, null, 2))

exec(`eslint -f unix -c '${file}' --ext .js,.ts,.tsx test/`)
