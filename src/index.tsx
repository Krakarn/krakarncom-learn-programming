import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import { NotFound } from "./NotFound";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/rainbow.css";
import { bookRoutes } from "./Book";
import { DictionaryContext } from "@lib";
import { dictionary } from "@content";

const run = async () => {
    hljs.registerLanguage("javascript", javascript);
    hljs.configure({ languages: ["javascript"] });
    const root = document.getElementById("root");
    if (!root) throw new Error("Root element not found");
    createRoot(root).render(
        <DictionaryContext.Provider value={dictionary}>
            <BrowserRouter
                basename={undefined /*"/krakarncom-learn-programming/"*/}
            >
                <Routes>
                    <Route path="/" element={<App />} />
                    {bookRoutes}
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </DictionaryContext.Provider>
    );
};

run();
