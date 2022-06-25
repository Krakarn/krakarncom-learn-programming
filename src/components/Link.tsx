import React from "react";
import { Link as RRLink, LinkProps } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Link = (props: LinkProps) => {
    return (
        <HashLink
            {...props}
            className={`${props.className} hover:text-red-400 transition-all`}
        />
    );
};
