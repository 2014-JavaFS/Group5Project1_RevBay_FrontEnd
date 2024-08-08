import { createContext, useMemo, useState } from "react";
const defaultContextValue = {
    value1: 0,
    value2: 1,
    setValue1: () => {},
    setValue2: () => {}
};
export const MyContext = createContext(defaultContextValue);

// Create a provider component
export function MyContextProvider ( {children} ) {
    const [value1, setValue1] = useState<number>(null);
    const [value2, setValue2] = useState<number>(null);
    const contextValue = useMemo(
        () => ({ value1, setValue1, value2, setValue2 }),
        [value1, value2]
    );
    return (
        <MyContext.Provider value={ contextValue}>
            {children}
        </MyContext.Provider>
    );
};