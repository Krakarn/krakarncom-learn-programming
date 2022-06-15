import React, { PropsWithChildren } from "react";

export const Highlight = ({ children }: PropsWithChildren) => (
    <span className="text-blue-300 font-bold">{children}</span>
);
