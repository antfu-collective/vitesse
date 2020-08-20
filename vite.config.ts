import { UserConfig } from 'vite'
import Voie from 'vite-plugin-voie'
import PurgeIcons from 'vite-plugin-purge-icons'
import { VitePluginComponents } from 'vite-plugin-components'

const config: UserConfig = {
  plugins: [
    Voie(),
    VitePluginComponents(),
    PurgeIcons(),
  ],
}

export default config
