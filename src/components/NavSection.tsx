import React from "react";
import { PropsWithChildren } from "react";
import { useMatch } from "react-router-dom";

export type NavSectionProps = PropsWithChildren<{
    label: string;
    base: string;
}>;

export const NavSection = ({ label, base, children }: NavSectionProps) => {
    const match = useMatch({ path: base, end: false });

    return (
        <div className="flex flex-col justify-start">
            <p
                className={`${
                    match ? "text-green-400" : ""
                } self-center my-2 text-xl`}
            >
                {label}
            </p>
            {children}
        </div>
    );
};

export default NavSection;
