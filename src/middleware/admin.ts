import { useUserStore } from '~/stores/user'
export default () => {
  const user = useUserStore()
  if (user.savedName !== 'admin') {
    console.log('admin middleware failed, redirecting to index')
    return { name: 'index' }
  }
}
