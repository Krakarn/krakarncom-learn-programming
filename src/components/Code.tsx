import React, { PropsWithChildren, useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";

export const Code = ({ children }: PropsWithChildren) => {
    const codeRef = useRef(null);

    useEffect(() => {
        if (codeRef.current) {
            hljs.highlightElement(codeRef.current);
        }
    }, [codeRef, children]);

    return (
        <code ref={codeRef} className="block">
            {children}
        </code>
    );
};
