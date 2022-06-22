import React from "react";
import { LinkProps } from "react-router-dom";
import { Link } from "./Link";

type InlineLinkProps = LinkProps & {
    external?: boolean;
};

export const InlineLink = ({ to, external, ...props }: InlineLinkProps) =>
    external ? (
        <a
            {...props}
            href={to as string}
            className={`${props.className} text-blue-400`}
        >
            {props.children}
        </a>
    ) : (
        <Link
            to={to}
            {...props}
            className={`${props.className} text-green-500`}
        />
    );
