import viteBasicSslPlugin from "@vitejs/plugin-basic-ssl"

export default {
    base: '/src',
    outDir: './../dist',
    publicDir: '/src/res',
    plugins: [
        viteBasicSslPlugin()
    ]
}
