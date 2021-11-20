export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "sr radio app",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://use.typekit.net/tjw5xxw.css" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    /* 	'@nuxtjs/axios', */
    { src: "@/plugins/global", mode: "client" },
  ],

  publicRuntimeConfig: {
    axios: {
      baseURL: "https://api.sr.se/api/v2",
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components",
    { path: "~/components/fragments" },
    { path: "~/components/layout" },
    { path: "~/components/common" },
    { path: "~/components/lists" },
    { path: "~/components/teasers" },
    { path: "~/components/sections" },
    { path: "~/components/navigation" },
    { path: "~/components/icons" },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: [
      "~assets/scss/mixins/_layout-mixins.scss",
      "~assets/scss/mixins/_breakpoint-mixins.scss",
      "~assets/scss/mixins/_reset-mixins.scss",
      "~assets/scss/mixins/_helper-mixins.scss",
      "~assets/scss/mixins/_motion-mixins.scss",
      "~assets/scss/vars/_variables.scss",
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
