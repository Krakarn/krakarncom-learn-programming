import React, { useCallback, useMemo, useState } from "react";
import { HintError, useLocalStorage } from "@lib";
import { Code } from "./Code";
import { ExerciseFrame } from "./ExerciseFrame";
import { TerminalOutput } from "./TerminalOutput";

type ExerciseProps = {
    saveKey: string;
    header: string;
    description: JSX.Element;
    preCode?: string;
    postCode?: string;
    initialCode: string;
    correctCode: string;
    iterations?: number;
    hidePostCode?: boolean;
    debug?: boolean;
    sharePreCode?: boolean;
};

export const Exercise = ({
    saveKey,
    header,
    description,
    preCode,
    postCode,
    initialCode,
    correctCode,
    iterations,
    hidePostCode,
    debug,
    sharePreCode,
}: ExerciseProps) => {
    const _iterations = iterations ?? 100;
    const _preCode = preCode ?? "";
    const _postCode = postCode ?? "";
    const [userCode, setUserCode] = useLocalStorage<string>(
        `excercise:${saveKey}`,
        initialCode
    );
    const tryUserCode = useCallback(() => {
        const code = `
return (() => {
    const window = undefined;
    const global = undefined;
    ${sharePreCode ? _preCode : ""}
    let output = [];
    let console = {log: (...args) => output = [...output, args.join(" ")]};
    const userCode = () => {${
        !sharePreCode ? _preCode : ""
    }${userCode};${_postCode};};
    userCode();
    const userOutput = output.join("\\n");
    output = [];
    const correctCode = () => {${
        !sharePreCode ? _preCode : ""
    }${correctCode};${_postCode};};
    correctCode();
    const correctOutput = output.join("\\n");
    output = [];

    return {userOutput, correctOutput};
})();
`;

        if (debug) console.debug(code);

        try {
            const f = new Function("HintError", code);
            const r = f(HintError) as {
                userOutput: string;
                correctOutput: string;
            };

            if (debug) console.debug(r);

            return r;
        } catch (e) {
            if (debug) console.error(e);
            return e as Error;
        }
    }, [preCode, userCode, correctCode, debug]);

    const onCodeChange = useCallback(
        (contents: string) => {
            setUserCode(contents);
        },
        [setUserCode]
    );

    //const userCodeResults = useMemo(() => {
    const calculateUserCodeResults = useCallback(() => {
        let numberOfCorrectIterations = 0;
        const userCodeOutputs: string[] = [];
        for (let i = 0; i < _iterations; i++) {
            const r = tryUserCode();

            if (r instanceof SyntaxError) {
                return `SyntaxError: ${r.message}`;
            }

            if (r instanceof HintError) {
                userCodeOutputs.push(`Hint: ${r.message}`);
                continue;
            }

            if (r instanceof Error) {
                userCodeOutputs.push(`Error: ${r.message}`);
                continue;
            }

            userCodeOutputs.push(r.userOutput);

            if (r.userOutput === r.correctOutput) {
                numberOfCorrectIterations++;
            }
        }

        return { numberOfCorrectIterations, userCodeOutputs };
    }, [userCode]);
    const [userCodeResults, setUserCodeResults] = useState<
        | string
        | { numberOfCorrectIterations: number; userCodeOutputs: string[] }
    >(calculateUserCodeResults());

    const output = useMemo(() => {
        if (typeof userCodeResults === "string")
            return <span className="text-red-400">{userCodeResults}</span>;

        const { numberOfCorrectIterations, userCodeOutputs } = userCodeResults;

        const resultEmoji =
            numberOfCorrectIterations === _iterations ? "🏆" : "❌";

        let userCodeOutput = (
            <>
                {userCodeOutputs.slice(0, 10).map((x, i) => {
                    if (/^Hint:/.test(x))
                        return (
                            <span key={i} className="text-yellow-500">
                                {x}
                            </span>
                        );
                    if (/^Error:/.test(x))
                        return (
                            <span key={i} className="text-red-400">
                                {x}
                            </span>
                        );
                    return x;
                })}
            </>
        );

        if (userCodeOutputs.length > 0)
            userCodeOutput = (
                <>
                    {userCodeOutput}
                    {"\n\n"}
                </>
            );

        return (
            <>
                {userCodeOutput}Tests succeeded: {numberOfCorrectIterations}/
                {_iterations} {resultEmoji}
            </>
        );
    }, [userCodeResults]);

    const isComplete = useMemo(() => {
        if (typeof userCodeResults === "string") return false;
        return userCodeResults.numberOfCorrectIterations === _iterations;
    }, [userCodeResults]);

    const onClickRun = useCallback(() => {
        setUserCodeResults(calculateUserCodeResults());
    }, [calculateUserCodeResults, setUserCodeResults]);

    return (
        <ExerciseFrame header={header} isComplete={isComplete}>
            <div className="mb-5">{description}</div>
            {preCode && (
                <Code noEditor hideOutput>
                    {preCode}
                </Code>
            )}
            <Code hideOutput onChange={onCodeChange} fullHeight>
                {userCode}
            </Code>
            {postCode && !hidePostCode && (
                <Code noEditor hideOutput>
                    {postCode}
                </Code>
            )}
            <div className="flex justify-center">
                <div
                    className="cursor-pointer px-5 py-2 bg-teal-700 inline-block hover:bg-teal-400 transition-colors my-3"
                    onClick={onClickRun}
                >
                    Run
                </div>
            </div>
            <TerminalOutput>{output}</TerminalOutput>
        </ExerciseFrame>
    );
};
