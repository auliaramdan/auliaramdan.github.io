import viteBasicSslPlugin from "@vitejs/plugin-basic-ssl"

export default {
    base: '/auliaramdan.github.io/src',
    outDir: './../dist',
    publicDir: '/src/res',
    plugins: [
        viteBasicSslPlugin()
    ]
}