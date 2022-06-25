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
    const containerRef = useRef<HTMLDivElement>(null);
    const codeRef = useRef<HTMLElement>(null);
    const defaultContents = useMemo(
        () =>
            typeof children === "string"
                ? children.trim()
                : children.map((x) => x.trim()).join(""),
        [children]
    );
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

        if (hideOutput) return;

        evaluateOutput(defaultContents);
    }, [noEditor, codeRef.current]);

    useEffect(() => {
        if (noEditor || !containerRef.current) return;

        const editor = monaco.editor.create(containerRef.current, {
            value: defaultContents,
            language: "javascript",
            theme: "vs-dark",
            lineNumbers: "on",
            readOnly: false,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            scrollbar: {
                alwaysConsumeMouseWheel: false,
            },
        });

        const initialHeight = editor.getContentHeight();
        let pHeight = initialHeight;
        let hasChangedModelContent = false;
        setHeight(initialHeight);

        editor.onDidChangeModelContent((e) => {
            hasChangedModelContent = true;
        });

        editor.onDidContentSizeChange((e) => {
            const heightDifference = e.contentHeight - pHeight;
            pHeight = e.contentHeight;
            if (!hasChangedModelContent || heightDifference === 0) return;
            if (containerRef.current?.style.height !== "160px")
                editor.setScrollTop(0);
            setHeight(160);
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
