import React, { PropsWithChildren } from "react";
import { Link } from "./Link";
import { Nav } from "./Nav";

export const Page = ({ children }: PropsWithChildren) => {
    return (
        <div id="top" className="min-h-full dark:text-yellow-50 flex">
            <Nav className="min-w-fit" />
            <div className="bg-white dark:bg-slate-600 flex flex-col flex-grow items-center content-center justify-start">
                <Link to="/" className="bg-slate-200 dark:bg-slate-800 w-full">
                    <h1 className="text-6xl font-light underline p-8 w-full text-center">
                        Learn Programming
                    </h1>
                </Link>
                <div className="w-full flex content-center items-center flex-col overflow-y-auto flex-grow">
                    <div className="flex flex-col max-w-5xl">{children}</div>
                </div>
            </div>
        </div>
    );
};
