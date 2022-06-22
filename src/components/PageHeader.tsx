import React, { PropsWithChildren } from "react";

export const PageHeader = ({ children }: PropsWithChildren) => (
    <div className="w-full dark:bg-slate-600">
        <h1 className="text-4xl text-center font-light p-4">{children}</h1>
    </div>
);
