import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { GettingStarted } from "./content/0-intro/0-GettingStarted";
import { RootFolder } from "./content/1-project/0-RootFolder";
import { Toolbox } from "./content/0-intro/1-Toolbox";
import "./index.css";
import { NotFound } from "./NotFound";
import { InitialFiles } from "./content/1-project/1-InitialFiles";
import { HelloWorld } from "./content/1-project/2-HelloWorld";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/rainbow.css";
import { Constants } from "./content/2-variables/0-Constants";
import { Mutables } from "./content/2-variables/1-Mutables";
import { DataTypes } from "./content/3-data-types/0-DataTypes";
import { Numbers } from "./content/3-data-types/1-Numbers";
import { Strings } from "./content/3-data-types/2-Strings";

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
                <Route
                    path="/intro/getting-started"
                    element={<GettingStarted />}
                />
                <Route path="/intro/toolbox" element={<Toolbox />} />
                <Route path="/project/root-folder" element={<RootFolder />} />
                <Route
                    path="/project/initial-files"
                    element={<InitialFiles />}
                />
                <Route path="/project/hello-world" element={<HelloWorld />} />
                <Route path="/variables/constants" element={<Constants />} />
                <Route path="/variables/mutables" element={<Mutables />} />
                <Route path="/data-types/intro" element={<DataTypes />} />
                <Route path="/data-types/numbers" element={<Numbers />} />
                <Route path="/data-types/strings" element={<Strings />} />
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

run();
