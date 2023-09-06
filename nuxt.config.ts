// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore',
        ],
      },
    ],
  ],
  serverMiddleware: [
    '~/api/index.js'
  ],
  buildModules: ['@nuxtjs/color-mode'],
  css: ['@/assets/main.css'],
  app: {
    head: {
      script: [
        { src: 'admin/plugins/jquery/jquery.min.js' },
        { src: 'admin/plugins/jquery-ui/jquery-ui.min.js' },
        { src: 'admin/plugins/bootstrap/js/bootstrap.bundle.min.js' },
        { src: 'admin/plugins/chart.js/Chart.min.js' },
        { src: 'admin/plugins/sparklines/sparkline.js' },
        { src: 'admin/plugins/jqvmap/jquery.vmap.min.js' },

        { src: 'admin/plugins/jqvmap/maps/jquery.vmap.usa.js' },
        { src: 'admin/plugins/jquery-knob/jquery.knob.min.js' },
        { src: 'admin/plugins/moment/moment.min.js' },
        { src: 'admin/plugins/daterangepicker/daterangepicker.js' },
        { src: 'admin/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js' },
        { src: 'admin/plugins/summernote/summernote-bs4.min.js' },

        { src: 'admin/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js' },
        { src: 'admin/dist/js/adminlte.js' },
        // { src: 'admin/dist/js/demo.js' },
        { src: 'admin/dist/js/pages/dashboard.js' }
      ]
    }
  }
})
