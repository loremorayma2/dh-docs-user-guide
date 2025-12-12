export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  css: ['~/assets/css/global.css'], 
  app: {
    head: {
      title: 'Digital Harbor - DOT',
      link: [
        { rel: 'icon', type: 'image/svg', href: '/logo-dark.svg' } 
      ],
    },
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', iso: 'en-US' },
      { code: 'es', name: 'Español', iso: 'es-ES' }
    ]
  }




});
