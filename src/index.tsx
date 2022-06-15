import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { GettingStarted } from "./content/intro/GettingStarted";
import { RootFolder } from "./project/RootFolder";
import { Toolbox } from "./content/intro/Toolbox";
import "./index.css";
import { NotFound } from "./NotFound";
import { InitialFiles } from "./project/InitialFiles";

const run = async () => {
    const root = document.getElementById("root");
    if (!root) throw new Error("Root element not found");
    createRoot(root).render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route
                    path="/intro"
                    element={<Navigate to="/intro/getting-started" />}
                ></Route>
                <Route
                    path="/intro/getting-started"
                    element={<GettingStarted />}
                />
                <Route path="/intro/toolbox" element={<Toolbox />} />
                <Route
                    path="/project"
                    element={<Navigate to="/project/root-folder" />}
                ></Route>
                <Route path="/project/root-folder" element={<RootFolder />} />
                <Route
                    path="/project/initial-files"
                    element={<InitialFiles />}
                />
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

run();
