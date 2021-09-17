import { useUserStore } from '~/stores/user'
const user = useUserStore()
export default () => {
  if (!user.savedName) {
    console.log('auth middleware failed, redirecting to index')
    return { name: 'index' }
  }
}
