import React, { PropsWithChildren } from "react";
import { Link } from "./Link";

export const PageHeader = ({ children }: PropsWithChildren) => {
    return (
        <Link to="/">
            <h1 className="text-6xl font-light underline p-8">{children}</h1>
        </Link>
    );
};
