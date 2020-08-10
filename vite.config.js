import voie from 'vite-plugin-voie'
import PurgeIcons from 'vite-plugin-purge-icons'

export default {
  plugins: [
    voie({
      pagesDir: 'src/pages',
      extensions: ['vue', 'ts'],
    }),
    PurgeIcons(),
  ],
}
