import React from "react";
import { HTMLProps } from "react";

export const Paragraph = (props: HTMLProps<HTMLParagraphElement>) => (
    <div
        {...props}
        className={`${props.className} relative mb-10 text-lg last:mb-0`}
    />
);
