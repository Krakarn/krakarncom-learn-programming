import React, { PropsWithChildren } from "react";

export const TerminalOutput = ({ children }: PropsWithChildren) => (
    <div className="flex justify-between">
        <code className="bg-zinc-300 dark:bg-zinc-500 p-3 w-full block whitespace-pre">
            {children}
        </code>
    </div>
);
