import { createContext, useContext } from "react";

export type BookDictionary<T extends Record<string, JSX.Element>> = T;

export const DictionaryContext = createContext<BookDictionary<Record<string, JSX.Element>>>({});

export const useDictionary = () => useContext(DictionaryContext);