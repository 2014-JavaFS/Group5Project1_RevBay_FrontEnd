import { createContext, useState } from "react";
const defaultContextValue = {
    value1: 0,
    value2: 1,
    setValue1: () => {},
    setValue2: () => {}
};
export const MyContext = createContext(defaultContextValue);

// Create a provider component
export function MyContextProvider ( {children} ) {
    const [value1, setValue1] = useState<number>(0);
    const [value2, setValue2] = useState<number>(1);
    return (
        <MyContext.Provider value={{ value1, value2, setValue1, setValue2 }}>
            {children}
        </MyContext.Provider>
    );
};