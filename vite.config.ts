import { defineConfig } from "vite";
import monacoEditorPlugin from "vite-plugin-monaco-editor";
import { visualizer } from "rollup-plugin-visualizer";
import * as path from "path";

export default defineConfig({
    //base: "/krakarncom-learn-programming/",
    plugins: [
        visualizer(),
        monacoEditorPlugin({
            //base: 'krakarncom-learn-programming',
            languageWorkers: ['typescript', "editorWorkerService"],
            globalAPI: false,
        }),
    ],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@lib': path.resolve(__dirname, './src/lib'),
            '@content': path.resolve(__dirname, './src/content'),
        }
    },
    build: {
        rollupOptions: {
            input: ['./src/index.html'],
            output: {
                manualChunks: {
                    app: ['./src/index.html'],
                    highlightjs: ['highlight.js/lib/core', 'highlight.js/lib/languages/javascript'],
                    monacoEditor: ['monaco-editor/esm/vs/editor/editor.api'],
                    tsWorker: ['monaco-editor/esm/vs/language/typescript/ts.worker'],
                    editorWorker: ['monaco-editor/esm/vs/editor/editor.worker'],
                }
            },
        },
    },
});