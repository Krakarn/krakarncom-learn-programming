import React, { HTMLProps } from "react";

export const PageContent = (props: HTMLProps<HTMLDivElement>) => {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col flex-grow w-full p-5 bg-white dark:bg-slate-600`}
        />
    );
};
