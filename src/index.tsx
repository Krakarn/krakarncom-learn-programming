import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { GettingStarted } from "./content/intro/GettingStarted";
import { Toolbox } from "./content/intro/Toolbox";
import "./index.css";
import { NotFound } from "./NotFound";

const run = async () => {
    const root = document.getElementById("root");
    if (!root) throw new Error("Root element not found");
    createRoot(root).render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route
                    path="intro/getting-started"
                    element={<GettingStarted />}
                />
                <Route path="intro/toolbox" element={<Toolbox />} />
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

run();
