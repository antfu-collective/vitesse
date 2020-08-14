import Voie from 'vite-plugin-voie'
import PurgeIcons from 'vite-plugin-purge-icons'

export default {
  plugins: [
    Voie({
      pagesDir: 'src/pages',
      extensions: ['vue', 'ts'],
    }),
    PurgeIcons(),
  ],
}
