import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { TerminalOutput } from "./TerminalOutput";
import { Highlight } from "./Highlight";
import hljs from "highlight.js/es/core";
import { useConst } from "@lib";
import * as monaco from "monaco-editor";

type CodeEditorProps = {
    defaultContents: string;
    fullHeight?: boolean;
    onChange?(contents: string): void;
};

const CodeEditor = ({
    defaultContents,
    fullHeight,
    onChange,
}: CodeEditorProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const initialHeight = fullHeight ? 160 : 0;
    const [height, setHeight] = useState(initialHeight);

    useEffect(() => {
        if (!containerRef.current) return;

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

        const _initialHeight = initialHeight || editor.getContentHeight();
        let pHeight = _initialHeight;
        let hasChangedModelContent = false;
        setHeight(_initialHeight);

        editor.onDidChangeModelContent((e) => {
            hasChangedModelContent = true;
        });

        editor.onDidContentSizeChange((e) => {
            const heightDifference = e.contentHeight - pHeight;
            pHeight = e.contentHeight;
            if (
                !hasChangedModelContent ||
                heightDifference === 0 ||
                height === 160
            )
                return;
            if (containerRef.current?.style.height !== "160px")
                editor.setScrollTop(0);
            setHeight(160);
        });

        const getContents = () =>
            editor.getModel()?.getLinesContent().join("\n") || "";

        if (onChange) {
            editor.onDidChangeModelContent(() => onChange(getContents()));
            onChange(getContents());
        }

        return () => editor.dispose();
    }, [containerRef.current, onChange]);

    return (
        <div
            ref={containerRef}
            className="max-h-40"
            style={{ height: `${height}px` }}
        ></div>
    );
};

type CodeProps = {
    children: string[] | string;
    hideOutput?: boolean;
    noEditor?: boolean;
    onChange?: (contents: string) => void;
    fullHeight?: boolean;
};

export const Code = ({
    children,
    hideOutput,
    noEditor,
    onChange,
    fullHeight,
}: CodeProps) => {
    const codeRef = useRef<HTMLElement>(null);
    const defaultContents = useConst(() =>
        typeof children === "string"
            ? children.trim()
            : children.join("").trim()
    );
    const [codeInnerHTML, setCodeInnerHTML] = useState("");
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

    const _onChange = useCallback(
        (contents: string) => {
            if (onChange) {
                onChange(contents);
            }

            if (!hideOutput) {
                evaluateOutput(contents);
            }
        },
        [hideOutput, onChange]
    );

    const codeElement = useMemo(
        () =>
            (noEditor && (
                <code
                    ref={codeRef}
                    className="block whitespace-pre hljs language-javascript"
                    dangerouslySetInnerHTML={{ __html: codeInnerHTML }}
                />
            )) || (
                <CodeEditor
                    defaultContents={defaultContents}
                    fullHeight={fullHeight}
                    onChange={_onChange}
                />
            ),
        [noEditor, codeInnerHTML]
    );

    return (
        <>
            {codeElement}
            {!hideOutput && output.length > 0 && (
                <>
                    <Highlight>Output</Highlight>:
                    <TerminalOutput>{output.join("\n")}</TerminalOutput>
                </>
            )}
        </>
    );
};
