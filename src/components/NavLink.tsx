import React from "react";
import { LinkProps, useMatch } from "react-router-dom";
import { Link } from "./Link";

export const NavLink = (props: LinkProps) => {
    const match = useMatch(props.to as string);

    return (
        <Link
            {...props}
            className={`bg-white dark:bg-slate-600 ${
                match
                    ? "outline outline-green-500 dark:outline-green-500 text-green-500 outline-2 hover:outline-green-500 hover:text-green-500"
                    : ""
            } outline-1 p-2 mb-2 hover:outline-red-500 ${props.className}`}
        />
    );
};
