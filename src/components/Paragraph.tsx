import React from "react";
import { HTMLProps } from "react";

export const Paragraph = (props: HTMLProps<HTMLParagraphElement>) => (
    <p {...props} className={`${props.className} mb-10 text-lg`} />
);
