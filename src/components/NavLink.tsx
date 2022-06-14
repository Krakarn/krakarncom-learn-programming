import React from "react";
import { LinkProps, useMatch } from "react-router-dom";
import { Link } from "./Link";

export const NavLink = (props: LinkProps) => {
    const match = useMatch(props.to as string);

    return (
        <Link
            {...props}
            className={`outline ${
                match
                    ? "outline-green-500 dark:outline-green-500 text-green-500 outline-2 hover:outline-green-500 hover:text-green-500"
                    : "outline-black dark:outline-white"
            } outline-black outline-1 p-2 mb-2 hover:outline-red-500 dark:outline-white ${
                props.className
            }`}
        />
    );
};