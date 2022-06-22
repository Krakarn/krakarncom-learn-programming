import React from "react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const Nav = ({ className }: { className: string }) => {
    return (
        <nav
            className={`${className} p-3 flex flex-col justify-start align-middle bg-slate-100 dark:bg-slate-700`}
        >
            <NavSection label="Intro" base="/intro">
                <NavLink to="/intro/getting-started">Getting Started</NavLink>
                <NavLink to="/intro/toolbox">Toolbox</NavLink>
            </NavSection>
            <NavSection label="Project" base="/project">
                <NavLink to="/project/root-folder">Root Folder</NavLink>
                <NavLink to="/project/initial-files">Initial Files</NavLink>
                <NavLink to="/project/hello-world">Hello World</NavLink>
            </NavSection>
            <NavSection label="Variables" base="/variables">
                <NavLink to="/variables/constants">Constants</NavLink>
                <NavLink to="/variables/mutables">Mutables</NavLink>
            </NavSection>
            <NavSection label="Data Types" base="/data-types">
                <NavLink to="/data-types/intro">Data Types</NavLink>
                <NavLink to="/data-types/numbers">Numbers</NavLink>
                <NavLink to="/data-types/strings">Strings</NavLink>
            </NavSection>
        </nav>
    );
};
