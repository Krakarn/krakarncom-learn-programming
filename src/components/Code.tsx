import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import * as monaco from "monaco-editor";
import { TerminalOutput } from "./TerminalOutput";
import { Highlight } from "./Highlight";
import hljs from "highlight.js";

type CodeProps = {
    children: string[] | string;
    hideOutput?: boolean;
    noEditor?: boolean;
};

export const Code = ({ children, hideOutput, noEditor }: CodeProps) => {
    const containerRef = useRef(null);
    const codeRef = useRef(null);
    const defaultContents = useMemo(
        () => (typeof children === "string" ? children : children.join("")),
        [children]
    );
    const [contents, setContents] = useState(defaultContents);
    const [codeInnerHTML, setCodeInnerHTML] = useState("");
    const [height, setHeight] = useState(0);
    const [output, setOutput] = useState<string[]>([]);

    const evaluateOutput = useCallback(
        (code: string | undefined) => {
            if (!code) return;

            const fContent =
                "const console = {log}; const window = {}; const global = window;" +
                code;
            const f = new Function("log", fContent);

            try {
                let o: string[] = [];
                f((...xs: any[]) => (o = [...o, xs.join(" ")]));
                setOutput(o);
            } catch (e) {
                console.error(e);
            }
        },
        [setOutput]
    );

    useEffect(() => {
        if (!noEditor || !codeRef.current) return;

        const el = document.createElement("code");
        el.innerHTML = defaultContents;
        hljs.highlightElement(el);
        setCodeInnerHTML(el.innerHTML);
        evaluateOutput(defaultContents);
    }, [noEditor, codeRef.current]);

    useEffect(() => {
        if (noEditor || !containerRef.current) return;

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
                evaluateOutput(editor.getModel()?.getLinesContent().join("\n"));
            };

            editor.onDidChangeModelContent(onChange);

            onChange();
        }

        return () => editor.dispose();
    }, [noEditor, containerRef.current]);

    return (
        <>
            {(noEditor && (
                <code
                    ref={codeRef}
                    className="block whitespace-pre hljs language-javascript"
                    dangerouslySetInnerHTML={{ __html: codeInnerHTML }}
                />
            )) || (
                <div
                    ref={containerRef}
                    className="max-h-40"
                    style={{ height: `${height}px` }}
                ></div>
            )}
            {!hideOutput && output.length > 0 && (
                <>
                    <Highlight>Output</Highlight>:
                    <TerminalOutput>{output.join("\n")}</TerminalOutput>
                </>
            )}
        </>
    );
};
