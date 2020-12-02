import { execSync } from 'child_process'
// @ts-ignore
import { path } from 'chromium'

execSync(`npx cross-env CHROME_PATH="${path}" presite dist`, { stdio: 'inherit' })
