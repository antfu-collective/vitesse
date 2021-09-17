import { RouteLocationNormalized } from 'vue-router'
import { UserModule } from '~/types'

type Middleware = (to: RouteLocationNormalized, from: RouteLocationNormalized) => RouteLocationNormalized | boolean
interface MiddlewareModule {
  default: Middleware
}
export const install: UserModule = ({ router }) => {
  // The middleware for every page of the application.
  const globalMiddleware = ['example-global']

  // Load middleware modules dynamically.
  const globMiddleware = import.meta.globEager('./*.ts') as { [key: string]: MiddlewareModule }
  const middlewares: { [key: string]: Middleware } = {}
  for (const name of Object.keys(globMiddleware)) {
    middlewares[name.replace(/^\.\/|\.ts$/g, '')] = globMiddleware[name].default
  }

  router.beforeEach(async (to, from) => {
    // Get the middleware for all the matched components.
    const middleware = [...globalMiddleware]
    to.matched.filter(record => record.meta && record.meta.middleware).forEach((record) => {
      if (Array.isArray(record.meta.middleware)) {
        middleware.push(...record.meta.middleware)
      } else {
        middleware.push(record.meta.middleware as string)
      }
    })

    // call each middleware
    for (const name of middleware) {
      const middlewareFn = middlewares[name]
      if (!middlewareFn) {
        throw new Error(`Undefined or invalid middleware [${name}]`)
      }
      const response = await middlewareFn(to, from)
      if (response === true || response === undefined) {
        continue
      }
      return response
    }

  })
}
