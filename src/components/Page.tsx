import React, { PropsWithChildren } from "react";
import { Link } from "./Link";
import { Nav } from "./Nav";

export const Page = ({ children }: PropsWithChildren) => {
    return (
        <div className="h-full bg-slate-200 dark:bg-slate-800 dark:text-yellow-50 flex">
            <Nav />
            <div className="flex flex-col flex-grow items-center justify-center">
                <Link to="/">
                    <h1 className="text-6xl font-light underline p-8">
                        Learn Programming
                    </h1>
                </Link>
                {children}
            </div>
        </div>
    );
};
