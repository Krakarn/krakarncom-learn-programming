import React from "react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export const Nav = () => {
    return (
        <nav className="p-3 flex flex-col justify-start align-middle bg-slate-100 dark:bg-slate-700">
            <NavSection label="Intro" base="/intro">
                <NavLink to="/intro/getting-started">Getting Started</NavLink>
                <NavLink to="/intro/toolbox">Toolbox</NavLink>
            </NavSection>
            <NavSection label="Variables" base="/variables">
                <NavLink to="">Coming Soon</NavLink>
            </NavSection>
        </nav>
    );
};
