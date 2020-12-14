import { execSync } from 'child_process'
// @ts-ignore
import { path } from 'chromium'

console.log('Starting SSG...')
execSync(`npx cross-env CHROME_PATH="${path}" presite dist`, { stdio: 'inherit' })
console.log('SSG Finished...')
