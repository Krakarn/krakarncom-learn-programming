import React, { PropsWithChildren } from "react";
import { TerminalCommandHelp } from "./TerminalCommandHelp";

export const TerminalCommand = ({ children }: PropsWithChildren) => (
    <div className="flex justify-between">
        <code className="bg-zinc-300 dark:bg-zinc-500 p-3 w-11/12 block">
            {">"} {children}
        </code>
        <TerminalCommandHelp className="self-center" />
    </div>
);
