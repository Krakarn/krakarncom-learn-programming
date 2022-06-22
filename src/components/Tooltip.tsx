import React, {
    PropsWithChildren,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

type TooltipProps = PropsWithChildren<{
    anchor: JSX.Element;
}>;

export const Tooltip = ({ anchor, children }: TooltipProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const divRef = useRef<HTMLDivElement>(null);

    const [isOffBottom, setIsOffBottom] = useState(false);
    const [left, setLeft] = useState(0);
    const topOrBottom = useMemo(
        () => (isOffBottom ? "bottom-12" : "top-12"),
        [isOffBottom]
    );

    useEffect(() => {
        const timer = setInterval(() => {
            if (!divRef.current) return;

            const br = divRef.current.getBoundingClientRect();

            if (!isOffBottom) {
                setIsOffBottom(br.bottom > window.innerHeight);
            }

            if (left === 0) {
                const newLeft = Math.max(0, br.right - window.innerWidth);
                setLeft(newLeft);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [divRef.current]);

    console.log("isOffBottom", isOffBottom, window.innerHeight, topOrBottom);

    return (
        <div className="relative inline">
            <div
                className="inline"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                {anchor}
            </div>
            {isOpen && (
                <div
                    ref={divRef}
                    className={`absolute z-50 bg-zinc-200 border-zinc-700 dark:bg-zinc-500 border-dashed border-2 p-3 ${topOrBottom} left-${left} w-96 max-w-max min-w-fit`}
                >
                    {children}
                </div>
            )}
        </div>
    );
};
