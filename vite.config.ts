import path from 'path'
import { UserConfig } from 'vite'
import Voie from 'vite-plugin-voie'
import PurgeIcons from 'vite-plugin-purge-icons'
import ViteComponents from 'vite-plugin-components'

const config: UserConfig = {
  alias: {
    '/~/': path.resolve(__dirname, 'src'),
  },
  plugins: [
    Voie(),
    ViteComponents(),
    PurgeIcons(),
  ],
}

export default config
