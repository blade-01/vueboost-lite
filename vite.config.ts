import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Inspector from 'vite-plugin-vue-inspector';
import Pages from 'vite-plugin-pages';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3333
  },
  plugins: [
    vue(),
    // https://github.com/webfansplz/vite-plugin-vue-inspector
    Inspector({
      toggleButtonVisibility: 'never'
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      dirs: 'src/pages',
      extensions: ['vue', 'ts', 'js']
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core'
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/store'],
      vueTemplate: true
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts'
    }),
    Icons({ compiler: 'vue3' })
  ]
});
