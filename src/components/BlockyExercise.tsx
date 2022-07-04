import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocalStorage } from "@lib";
import { Code } from "./Code";
import { ExerciseFrame } from "./ExerciseFrame";
import { TerminalOutput } from "./TerminalOutput";

type BlockyExerciseProps = {
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

export const BlockyExercise = ({
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
}: BlockyExerciseProps) => {
    const _iterations = iterations ?? 100;
    const _preCode = preCode ?? "";
    const _postCode = postCode ?? "";
    const canvasRef = useRef(null);
    const [userCode, setUserCode] = useLocalStorage<string>(
        `excercise:${saveKey}`,
        initialCode
    );
    const [output, setOutput] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const tryUserCode = useCallback(() => {
        if (!canvasRef.current) return;

        const code = `
return (() => {
    let output = [];
    let console = {log: (...args) => output = [...output, args.join(" ")]};
    let noDraw = false;
    const drawBlocky = (() => {
        return (x, y, goalX, goalY) => {
            console.log(x, y, goalX, goalY);

            if (noDraw) return;

            const ctx = canvas.getContext('2d');
            const gs = 3;
            const ss = 320 + gs - 1;
            const cs = (ss - gs + 1) / gs;
            canvas.width = ss;
            canvas.height = ss;
            for (let i=0; i<gs; i++) {
                for (let j=0; j<gs; j++) {
                    ctx.fillStyle = '#aaa';
                    const gl = i*(cs + 1);
                    const gt = j*(cs + 1);
                    ctx.fillRect(gl - 1, gt - 1, cs + 2, cs + 2);
                    ctx.fillStyle = '#334499';
                    ctx.fillRect(gl, gt, cs, cs);
                }
            }

            const goalColor = '#ffff00';
            ctx.fillStyle = goalColor;

            ctx.fillRect(goalX * (cs + 1), goalY * (cs + 1), cs, cs);

            ctx.fillStyle = 'red';
            let ps = Math.floor(cs * .7);
            ps = ps + ps % 2;
            const po = (cs - ps) / 2;
            ctx.fillRect(x * (cs + 1) + po, y * (cs + 1) + po, ps, ps);
        };
    })();
    const window = undefined;
    const global = undefined;
    ${sharePreCode ? _preCode : ""}
    const userCode = () => {${
        !sharePreCode ? _preCode : ""
    }${userCode};${_postCode};};
    userCode();
    const userOutput = output.join("\\n");
    output = [];
    const correctCode = () => {${
        !sharePreCode ? _preCode : ""
    }${correctCode};${_postCode};};
    noDraw = true;
    correctCode();
    const correctOutput = output.join("\\n");
    output = [];

    return {userOutput, correctOutput};
})();
`;

        if (debug) console.debug(code);

        try {
            const f = new Function("canvas", code);
            const r = f(canvasRef.current) as {
                userOutput: string;
                correctOutput: string;
            };

            if (debug) console.debug(r);

            return r;
        } catch (e) {
            if (debug) console.error(e);
            return e as Error;
        }
    }, [preCode, userCode, correctCode, debug, canvasRef.current]);

    const onCodeChange = useCallback(
        (contents: string) => {
            setUserCode(contents);
        },
        [setUserCode]
    );

    const calculateOutput = useCallback(() => {
        let numberOfCorrectIterations = 0;
        for (let i = 0; i < _iterations; i++) {
            const r = tryUserCode();
            if (!r) return "";

            if (r instanceof SyntaxError) {
                break;
            }

            if (r instanceof Error) {
                continue;
            }

            if (r.userOutput === r.correctOutput) {
                numberOfCorrectIterations++;
            }
        }

        const _isComplete = numberOfCorrectIterations === _iterations;
        setIsComplete(_isComplete);

        const resultEmoji = _isComplete ? "🏆" : "❌";

        setOutput(
            `Tests succeeded: ${numberOfCorrectIterations}/${_iterations} ${resultEmoji}`
        );
    }, [tryUserCode]);

    useEffect(() => {
        calculateOutput();
    }, []);

    const onClickRun = useCallback(() => {
        calculateOutput();
    }, [calculateOutput]);

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
            <canvas ref={canvasRef}></canvas>
        </ExerciseFrame>
    );
};
