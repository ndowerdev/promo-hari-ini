import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  app: {
    baseURL: '/',
  },
  // render: {
  //   injectScripts: false,
  //   resourceHints: false,
  // },
  target: 'server',
  ssr: true,
  nitro: {
    preset: 'node-server',
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    // 'nuxt-jsonld',
    'nuxt-schema-org',

  ],

  schemaOrg: {
    // set to your production domain
    canonicalHost: 'https://scanharga.dev',
  },
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  // https://github.com/nuxt/framework/issues/6204#issuecomment-1201398080
  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer) {
        // Workaround for netlify issue
        // https://github.com/nuxt/framework/issues/6204
        config.build.rollupOptions.output.inlineDynamicImports = true
      }
    },
  },
})
