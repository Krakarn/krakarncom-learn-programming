import React, { useEffect, useMemo, useRef, useState } from "react";
import * as monaco from "monaco-editor";
import { TerminalOutput } from "./TerminalOutput";
import { Highlight } from "./Highlight";

type CodeProps = {
    children: string[] | string;
    hideOutput?: boolean;
};

export const Code = ({ children, hideOutput }: CodeProps) => {
    const containerRef = useRef(null);
    const defaultContents = useMemo(
        () => (typeof children === "string" ? children : children.join("")),
        [children]
    );
    const [contents, setContents] = useState(defaultContents);
    const [height, setHeight] = useState(0);
    const [output, setOutput] = useState<string[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const editor = monaco.editor.create(containerRef.current, {
            value: contents,
            language: "javascript",
            theme: "vs-dark",
            lineNumbers: "on",
            readOnly: false,
        });

        setHeight(editor.getContentHeight());

        editor.onDidContentSizeChange((e) => {
            setHeight(e.contentHeight);
        });

        if (!hideOutput) {
            const onChange = () => {
                const fContent =
                    "const console = {log}; const window = {}; const global = window;" +
                    editor.getModel()?.getLinesContent().join("\n");
                const f = new Function("log", fContent);

                try {
                    let o: string[] = [];
                    f((...xs: any[]) => (o = [...o, xs.join(" ")]));
                    setOutput(o);
                } catch (e) {
                    console.error(e);
                }
            };

            editor.onDidChangeModelContent(onChange);

            onChange();
        }

        return () => editor.dispose();
    }, [containerRef.current]);

    return (
        <>
            <div
                ref={containerRef}
                className="max-h-40"
                style={{ height: `${height}px` }}
            ></div>
            {!hideOutput && output.length > 0 && (
                <>
                    <Highlight>Output</Highlight>:
                    <TerminalOutput>{output.join("\n")}</TerminalOutput>
                </>
            )}
        </>
    );
};
