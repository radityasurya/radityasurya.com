module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "radityasurya.com",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Personal website"
      }
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "fonts.googleapis.com/css?family=Lato"
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#3B8070"
  },
  css: [
    "element-ui/lib/theme-chalk/reset.css",
    "element-ui/lib/theme-chalk/display.css",
    "element-ui/lib/theme-chalk/index.css",
    "normalize.css",
    "@/assets/scss/main.scss"
  ],
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/scss/main.scss'],
  ],

  plugins: ["@/plugins/element-ui"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  router: {
    linkActiveClass: 'menu__item--active'
  },

};
