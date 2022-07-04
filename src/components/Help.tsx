import React, { PropsWithChildren, useCallback, useEffect } from "react";

type HelpProps = PropsWithChildren<{ className?: string }>;

export const Help = ({ className, children }: HelpProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const onClickOutside = useCallback(() => setIsOpen(false), [setIsOpen]);
    const onClickAnchor = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(!isOpen);
        },
        [setIsOpen, isOpen]
    );

    useEffect(() => {
        document.addEventListener("click", onClickOutside);
        return () => document.removeEventListener("click", onClickOutside);
    }, [onClickOutside]);

    return (
        <div className="absolute inline-flex align-center ml-auto z-50 right-0">
            <div
                className={`${className} ${
                    isOpen ? "bg-zinc-700" : "bg-zinc-300"
                } text-cyan-600 border-zinc-500 border-dashed border-2 box-content inline-block w-7 h-7 rounded-full text-center font-extrabold cursor-pointer select-none`}
                onClick={onClickAnchor}
            >
                ?
            </div>
            {isOpen && (
                <div className="absolute bg-zinc-200 border-zinc-500 dark:bg-zinc-700 border-dashed border-2 p-3 top-12 -left-96">
                    {children}
                </div>
            )}
        </div>
    );
};
