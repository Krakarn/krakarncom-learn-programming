import React from "react";
import { bookNav } from "../Book";

export const Nav = ({ className }: { className: string }) => {
    return (
        <nav
            className={`${className} p-3 flex flex-col justify-start align-middle bg-slate-100 dark:bg-slate-700`}
        >
            {bookNav}
        </nav>
    );
};
