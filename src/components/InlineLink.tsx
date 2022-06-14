import React from "react";
import { LinkProps } from "react-router-dom";
import { Link } from "./Link";

export const InlineLink = (props: LinkProps) => (
    <Link {...props} className={`${props.className} text-green-500`}></Link>
);
