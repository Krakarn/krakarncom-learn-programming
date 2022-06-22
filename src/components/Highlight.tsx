import React, { PropsWithChildren, useMemo } from "react";
import { dictionary } from "../content/dictionary";
import { Tooltip } from "./Tooltip";

type HighlightProps = PropsWithChildren<{
    dictionaryLabel?: string;
}>;

export const Highlight = ({ dictionaryLabel, children }: HighlightProps) => {
    const dictionaryEntry = useMemo(
        () =>
            dictionary[
                (dictionaryLabel ||
                    ((children as string).toLowerCase &&
                        (
                            children as string
                        ).toLowerCase())) as keyof typeof dictionary
            ],
        [children]
    );

    const highlightedNode = useMemo(
        () => <span className="text-blue-300 font-bold">{children}</span>,
        [dictionaryEntry, children]
    );

    return (
        (dictionaryEntry && (
            <Tooltip anchor={highlightedNode}>{dictionaryEntry}</Tooltip>
        )) ||
        highlightedNode
    );
};
