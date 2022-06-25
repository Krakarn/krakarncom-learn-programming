import React from "react";
import { Route } from "react-router";
import { NavLink } from "./components/NavLink";
import { NavSection } from "./components/NavSection";
import { GettingStarted } from "./content/0-intro/0-GettingStarted";
import { Toolbox } from "./content/0-intro/1-Toolbox";
import { RootFolder } from "./content/1-project/0-RootFolder";
import { InitialFiles } from "./content/1-project/1-InitialFiles";
import { HelloWorld } from "./content/1-project/2-HelloWorld";
import { Constants } from "./content/2-variables/0-Constants";
import { Mutables } from "./content/2-variables/1-Mutables";
import { DataTypes } from "./content/3-data-types/0-DataTypes";
import { Numbers } from "./content/3-data-types/1-Numbers";
import { Strings } from "./content/3-data-types/2-Strings";
import { Booleans } from "./content/3-data-types/3-Booleans";
import { If } from "./content/4-control-structures/0-if";
import { For } from "./content/4-control-structures/1-for";

type Section = {
    title: string;
    path: string;
    element: JSX.Element;
};

type Chapter = {
    title: string;
    base: string;
    sections: Section[];
};

type Book = {
    chapters: Chapter[];
};

const getSectionUrl = (chapter: Chapter, sectionIndex: number) =>
    `${chapter.base}/${chapter.sections[sectionIndex].path}`;

const getSection = (book: Book, chapterIndex: number, sectionIndex: number) =>
    book.chapters[chapterIndex].sections[sectionIndex];

const book: Book = {
    chapters: [
        {
            title: "Intro",
            base: "/intro",
            sections: [
                {
                    title: "Getting Started",
                    path: "getting-started",
                    element: <GettingStarted />,
                },
                {
                    title: "Toolbox",
                    path: "toolbox",
                    element: <Toolbox />,
                },
            ],
        },
        {
            title: "Project",
            base: "/project",
            sections: [
                {
                    title: "Root Folder",
                    path: "root-folder",
                    element: <RootFolder />,
                },
                {
                    title: "Initial Files",
                    path: "initial-files",
                    element: <InitialFiles />,
                },
                {
                    title: "Hello World",
                    path: "hello-world",
                    element: <HelloWorld />,
                },
            ],
        },
        {
            title: "Variables",
            base: "/variables",
            sections: [
                {
                    title: "Constants",
                    path: "constants",
                    element: <Constants />,
                },
                {
                    title: "Mutables",
                    path: "mutables",
                    element: <Mutables />,
                },
            ],
        },
        {
            title: "Data Types",
            base: "/data-types",
            sections: [
                {
                    title: "Data Types",
                    path: "intro",
                    element: <DataTypes />,
                },
                {
                    title: "Numbers",
                    path: "numbers",
                    element: <Numbers />,
                },
                {
                    title: "Strings",
                    path: "strings",
                    element: <Strings />,
                },
                {
                    title: "Booleans",
                    path: "booleans",
                    element: <Booleans />,
                },
            ],
        },
        {
            title: "Control Structures",
            base: "/control-structures",
            sections: [
                {
                    title: "If",
                    path: "if",
                    element: <If />,
                },
                {
                    title: "For",
                    path: "for",
                    element: <For />,
                },
            ],
        },
    ],
};

export const bookRoutes = book.chapters.map((chapter, ci) =>
    chapter.sections.map((section, si) => (
        <Route
            path={getSectionUrl(chapter, si)}
            element={getSection(book, ci, si).element}
        />
    ))
);

export const bookNav = book.chapters.map((chapter, ci) => (
    <NavSection key={ci} base={chapter.base} label={chapter.title}>
        {chapter.sections.map((section, si) => (
            <NavLink key={si} to={getSectionUrl(chapter, si)}>
                {section.title}
            </NavLink>
        ))}
    </NavSection>
));
