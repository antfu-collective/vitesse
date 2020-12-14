/* eslint-disable @typescript-eslint/no-var-requires */
console.log('Starting SSG...')

const { execSync } = require('child_process')
const chromium = require('chromium')

execSync(`npx cross-env CHROME_PATH="${chromium.path}" presite dist`, { stdio: 'inherit' })
console.log('SSG Finished...')
