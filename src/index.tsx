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

const run = async () => {
    hljs.registerLanguage("javascript", javascript);
    hljs.configure({ languages: ["javascript"] });
    const root = document.getElementById("root");
    if (!root) throw new Error("Root element not found");
    createRoot(root).render(
        <BrowserRouter
            basename={undefined /*"/krakarncom-learn-programming/"*/}
        >
            <Routes>
                <Route path="/" element={<App />} />
                {bookRoutes}
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

run();
