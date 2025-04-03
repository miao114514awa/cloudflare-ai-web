// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: false},
    modules: ['@nuxt/ui', '@nuxtjs/i18n'],
    css: ['~/assets/css/style.css'],
    devServer: {
        port: 3001,
    },
    routeRules: {
        '/': {
            prerender: true,
        }
    },
    app: {
        head: {
            title: 'Culip的AI小破站',
            meta: [
                {
                    name: 'keywords',
                    content: 'Culip, AI, Cloudflare, ChatGPT, GeminiPro, Google Generative AI'
                },
                {
                    name: 'description',
                    content: '一个提供免费AI的网站（当然仅是一点点）'
                }
            ],
            link: [
                {
                    rel: 'manifest',
                    href: '/manifest.json'
                }
            ],
            noscript: [
                {
                    innerHTML: 'This website requires JavaScript.'
                }
            ]
        }
    },
    i18n: {
        vueI18n: './i18n.config.ts',
        strategy: 'no_prefix',
        defaultLocale: 'zh',
    }
    // nitro: {
    //     vercel: {
    //         regions: ["sin1", "syd1", "sfo1", "iad1", "pdx1", "cle1"]
    //     }
    // }
})
