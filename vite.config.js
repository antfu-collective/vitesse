import Voie from 'vite-plugin-voie'
import PurgeIcons from 'vite-plugin-purge-icons'
import { VitePluginComponents } from 'vite-plugin-components'

export default {
  plugins: [
    Voie(),
    VitePluginComponents(),
    PurgeIcons(),
  ],
}
