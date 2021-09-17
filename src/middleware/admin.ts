import { useUserStore } from '~/stores/user'
const user = useUserStore()
export default () => {
  if (user.savedName !== 'admin') {
    console.log('admin middleware failed, redirecting to index')
    return { name: 'index' }
  }
}
