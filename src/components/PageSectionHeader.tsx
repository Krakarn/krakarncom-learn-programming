import React, { PropsWithChildren } from "react";

export const PageSectionHeader = ({ children }: PropsWithChildren) => (
    <h2 className="text-2xl my-8">{children}</h2>
);
