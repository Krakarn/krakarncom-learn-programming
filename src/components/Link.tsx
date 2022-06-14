import React from "react";
import { Link as RRLink, LinkProps } from "react-router-dom";

export const Link = (props: LinkProps) => {
    return (
        <RRLink
            {...props}
            className={`${props.className} hover:text-red-400 transition-all`}
        />
    );
};
