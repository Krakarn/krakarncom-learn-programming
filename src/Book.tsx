import React, { Suspense } from "react";
import { Route } from "react-router";
import { DictionaryContext } from "@lib";
import { dictionary } from "@content";
const NavLink = React.lazy(() => import("@components/NavLink"));
const NavSection = React.lazy(() => import("@components/NavSection"));
const GettingStarted = React.lazy(
    () => import("@content/0-intro/0-GettingStarted")
);
const Toolbox = React.lazy(() => import("@content/0-intro/1-Toolbox"));
const RootFolder = React.lazy(() => import("@content/1-project/0-RootFolder"));
const InitialFiles = React.lazy(
    () => import("@content/1-project/1-InitialFiles")
);
const HelloWorld = React.lazy(() => import("@content/1-project/2-HelloWorld"));
const Constants = React.lazy(() => import("@content/2-variables/0-Constants"));
const Mutables = React.lazy(() => import("@content/2-variables/1-Mutables"));
const DataTypes = React.lazy(() => import("@content/3-data-types/0-DataTypes"));
const Numbers = React.lazy(() => import("@content/3-data-types/1-Numbers"));
const Strings = React.lazy(() => import("@content/3-data-types/2-Strings"));
const Booleans = React.lazy(() => import("@content/3-data-types/3-Booleans"));
const If = React.lazy(() => import("@content/4-control-structures/0-If"));
const ForLoop = React.lazy(() => import("@content/4-control-structures/1-For"));

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
                    title: "For Loop",
                    path: "for",
                    element: <ForLoop />,
                },
            ],
        },
    ],
};

const bookElement = (element: JSX.Element) => (
    <Suspense>
        <DictionaryContext.Provider value={dictionary}>
            {element}
        </DictionaryContext.Provider>
    </Suspense>
);

export const bookRoutes = book.chapters.map((chapter, ci) =>
    chapter.sections.map((section, si) => (
        <Route
            path={getSectionUrl(chapter, si)}
            element={bookElement(getSection(book, ci, si).element)}
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
