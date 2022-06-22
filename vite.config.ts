import { defineConfig } from "vite";
import monacoEditorPlugin from "vite-plugin-monaco-editor";

export default defineConfig({
    base: "/krakarncom-learn-programming/",
    plugins: [
        monacoEditorPlugin(),
    ],
    build: {
        rollupOptions: {
            output: {
                tsWorker: ['monaco-editor/esm/vs/language/typescript/ts.worker'],
                editorWorker: ['monaco-editor/esm/vs/editor/editor.worker'],
            } as any,
        },
    },
});