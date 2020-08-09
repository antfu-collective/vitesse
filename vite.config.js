import voie from 'vite-plugin-voie'

export default {
  plugins: [
    voie({
      pagesDir: 'src/pages',
      extensions: ['vue', 'ts'],
    }),
  ],
}
