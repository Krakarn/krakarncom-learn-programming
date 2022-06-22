import { defineConfig } from "vite";
import monacoEditorPlugin from "vite-plugin-monaco-editor";

export default defineConfig({
    base: "/krakarncom-learn-programming/",
    plugins: [
        monacoEditorPlugin(),
    ],
});