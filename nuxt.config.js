export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Real Eleitor',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Veja o resultado das pesquisas presidenciais em tempo real' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "msapplication-TileColor" , content: "#ffffff"},
      { name: "msapplication-TileImage" , content: "/ms-icon-144x144.png"},
      { name: "theme-color" , content: "#ffffff"},
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: "apple-touch-icon" ,sizes: "57x57" ,href: "/apple-icon-57x57.png"},
      { rel: "apple-touch-icon" ,sizes: "60x60" ,href: "/apple-icon-60x60.png"},
      { rel: "apple-touch-icon" ,sizes: "72x72" ,href: "/apple-icon-72x72.png"},
      { rel: "apple-touch-icon" ,sizes: "76x76" ,href: "/apple-icon-76x76.png"},
      { rel: "apple-touch-icon" ,sizes: "114x114" ,href: "/apple-icon-114x114.png"},
      { rel: "apple-touch-icon" ,sizes: "120x120" ,href: "/apple-icon-120x120.png"},
      { rel: "apple-touch-icon" ,sizes: "144x144" ,href: "/apple-icon-144x144.png"},
      { rel: "apple-touch-icon" ,sizes: "152x152" ,href: "/apple-icon-152x152.png"},
      { rel: "apple-touch-icon" ,sizes: "180x180" ,href: "/apple-icon-180x180.png"},
      { rel: "icon" ,type: "image/png" ,sizes: "192x192"  ,href: "/android-icon-192x192.png"},
      { rel: "icon" ,type: "image/png" ,sizes: "32x32" ,href: "/favicon-32x32.png"},
      { rel: "icon" ,type: "image/png" ,sizes: "96x96" ,href: "/favicon-96x96.png"},
      { rel: "icon" ,type: "image/png" ,sizes: "16x16" ,href: "/favicon-16x16.png"},
      { rel: "manifest",href: "/manifest.json"},
      // <link rel="manifest" href="/manifest.json"></link>
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
    '@nuxtjs/recaptcha'
  ],

  firebase: {
    config: {
      apiKey: 'AIzaSyAJFBlLGtRwbQtAAl9XGhh-KqGPXOKuocM',
      authDomain: 'real-voter.firebaseapp.com',
      projectId: 'real-voter',
      storageBucket: 'real-voter.appspot.com',
      messagingSenderId: '411061275486',
      appId: '1:411061275486:web:1e40e81dc0c3efdff09dcf',
      measurementId: 'G-Y7SRC73R4D'
    },
    services: {
      auth: true, // Just as example. Can be any other service.
      firestore: true,
    }
  },

  googleFonts: {
    text: 'Hello world',
    families: {
      DMSans: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },

  recaptcha: {
    // hideBadge: Boolean, // Hide badge element (v3 & v2 via size=invisible)
    // language: String,   // Recaptcha language (v2)
    mode: "enterprise",       // Mode: 'base', 'enterprise'
    siteKey: '6LfCV9UhAAAAAGGxTt-7lyhy8nncerPMSn9my2z-',    // Site key for requests
    version: 2,    // Version
    size: "normal"        // Size: 'compact', 'normal', 'invisible' (v2)
  },

  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      siteKey: '6LfCV9UhAAAAAGGxTt-7lyhy8nncerPMSn9my2z-'// for example
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
