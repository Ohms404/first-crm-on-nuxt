// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/image",
    "@nuxt/icon",
    'nuxt-icon',
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/ui"
  ],
  image:{
    /* ... */
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  hooks: {
    'components:dirs': dirs => {
      dirs.unshift({
       path: './components/ui',
       extensions: ['.vue'],
       prefix: 'U',
       pathPrefix: false,
      })
    },
  },
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/my-icons'
      },
    ],
  },
})