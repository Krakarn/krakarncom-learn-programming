import { useCallback, useEffect, useMemo, useState } from "react"

export const useConst = <T>(f: () => T): T => useMemo(f, []);

export const useLocalStorage = <T,>(
    key: string,
    initialValue: T
): [value: T, setValue: (newValue: T) => void] => {
    const getFromLocalStorage = useCallback(() => {
        try {
            return JSON.parse(localStorage.getItem(key) || "undefined");
        } catch (e) { }
    }, []);

    const [value, setValue] = useState(getFromLocalStorage() ?? initialValue);

    useEffect(() => {
        if (value === initialValue) return;
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};