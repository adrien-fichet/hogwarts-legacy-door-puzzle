import { defineConfig } from 'vite'
import svg from 'vite-plugin-svgo'

export default defineConfig({
  plugins: [
    svg({
      multipass: true,
      js2svg: {
        pretty: true,
      },
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              cleanupIds: false,
            },
          },
        },
      ],
    }),
  ],
  build: {
    outDir: 'build',
  }
})
