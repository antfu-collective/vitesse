import { createPinia } from 'pinia'
import { useUserStore } from '~/stores/user'
import { UserModule } from '~/types'

// Setup Pinia
// https://pinia.esm.dev/
export const install: UserModule = ({ isClient, initialState, app, router }) => {
  const pinia = createPinia()
  app.use(pinia)
  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  if (isClient)
    pinia.state.value = (initialState.pinia) || {}

  else
    initialState.pinia = pinia.state.value

  router.beforeEach((to, from) => {
    const user = useUserStore()
    console.log('route middleware is running', to.meta.middleware)
    if (to.meta.middleware === 'auth' && !user.savedName) {
      console.log('route guard redirecting to index')
      return { name: 'index' }
    }
    return true
  })

}
