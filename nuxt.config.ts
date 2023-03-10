// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/supabase"
    ],
    app: {
        head: {
            title: "Hypsipyle",
            link: [
                { rel: "icon", href: "Hypsipyle.ico" }
            ]
        }
    }
})
