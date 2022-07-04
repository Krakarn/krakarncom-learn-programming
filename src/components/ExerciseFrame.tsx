import React, { PropsWithChildren } from "react";

type ExerciseFrameProps = PropsWithChildren<{
    header: string;
    isComplete: boolean;
}>;

export const ExerciseFrame = ({
    children,
    header,
    isComplete,
}: ExerciseFrameProps) => (
    <div
        className={`p-10 bg-slate-300 dark:bg-slate-500 ${
            isComplete ? "border-green-500" : "border-white"
        } border-2`}
    >
        <h3 className="text-2xl mb-10">Exercise: {header}</h3>
        {children}
    </div>
);
