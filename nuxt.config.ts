// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          src:"https://developers.kakao.com/sdk/js/kakao.js"
        }
      ]
    },
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3003'
    }
  }
})
