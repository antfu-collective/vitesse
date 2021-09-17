import { useUserStore } from '~/stores/user'
export default () => {
  const user = useUserStore()
  if (!user.savedName) {
    console.log('auth middleware failed, redirecting to index')
    return { name: 'index' }
  }
}
