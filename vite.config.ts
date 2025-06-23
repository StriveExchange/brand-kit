import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import * as path from 'node:path'

export default defineConfig(() => {
    return {
        plugins: [
            viteStaticCopy({
                targets: [
                    { src: 'src/logos',   dest: '.' },
                    { src: 'src/fonts',   dest: '.' },
                    { src: 'src/banners', dest: '.' },
                    { src: 'src/colors',  dest: '.' },
                    { src: "src/custom.d.ts", dest: "."}
                ]
            }),
        ],
        build: {
            lib: {
                entry: path.resolve(__dirname, "src/index.ts"),
                name: "brandKit"
            },
            assetsInlineLimit: 0,
            outDir: "dist",
            emptyOutDir: false,
            target: "modules"
        }
    }
})
