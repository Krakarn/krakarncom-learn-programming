import React from "react";
import { Highlight } from "./Highlight";
import { Paragraph } from "./Paragraph";

export const TerminalCommandHelp = ({ className }: { className: string }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="relative flex align-center">
            <div
                className={`${className} ${
                    isOpen ? "bg-zinc-700" : "bg-zinc-300"
                } text-cyan-600 border-zinc-500 border-dashed border-2 box-content inline-block w-7 h-7 rounded-full text-center font-extrabold cursor-pointer select-none`}
                onClick={() => setIsOpen(!isOpen)}
            >
                ?
            </div>
            {isOpen && (
                <div
                    className="absolute bg-zinc-200 border-zinc-500 dark:bg-zinc-700 border-dashed border-2 p-3 top-12 -left-96"
                    onClick={() => setIsOpen(false)}
                >
                    <Paragraph>
                        This is a <Highlight>terminal command</Highlight>.
                    </Paragraph>
                    <Paragraph>
                        You can execute commands in a program called a terminal.
                        On Windows, you can open the start-menu and type{" "}
                        <Highlight>cmd</Highlight> or{" "}
                        <Highlight>powershell</Highlight> to open a terminal.
                    </Paragraph>
                    <Paragraph>
                        You can also open a terminal in Visual Studio Code by
                        selecting Terminal → New Terminal in the top menu.
                    </Paragraph>
                    <Paragraph>
                        You can type commands in the terminal and they will be
                        executed.
                    </Paragraph>
                </div>
            )}
        </div>
    );
};
