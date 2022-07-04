import React from "react";
import { HashLink, HashLinkProps } from "react-router-hash-link";

export type LinkProps = HashLinkProps;

export const Link = (props: LinkProps) => {
    return (
        <HashLink
            {...props}
            className={`${props.className} hover:text-red-400 transition-all`}
        />
    );
};
