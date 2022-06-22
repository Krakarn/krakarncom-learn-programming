import React from "react";
import { Help } from "./Help";
import { Highlight } from "./Highlight";
import { Paragraph } from "./Paragraph";

export const TerminalCommandHelp = ({ className }: { className: string }) => (
    <Help className={className}>
        <Paragraph>
            This is a <Highlight>terminal command</Highlight>. Note: Terminal is
            sometimes called console or shell.
        </Paragraph>
        <Paragraph>
            You can execute commands in a program called a terminal. On Windows,
            you can open the start-menu and type <Highlight>cmd</Highlight> or{" "}
            <Highlight>powershell</Highlight> to open a terminal.
        </Paragraph>
        <Paragraph>
            You can also open a terminal in Visual Studio Code by selecting
            Terminal → New Terminal in the top menu.
        </Paragraph>
        <Paragraph>
            You can type commands in the terminal and they will be executed.
        </Paragraph>
    </Help>
);
