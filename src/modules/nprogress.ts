import NProgress from 'nprogress'

import type { UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (!isClient) return

  router.beforeEach(() => { NProgress.start() })
  router.afterEach(() => { NProgress.done() })
}
