import { createContext, useState } from "react";
const defaultContextValue = {
    value1: 0,
    value2: 1,
    userId:0,
    setValue1: () => {},
    setValue2: () => {},
    setUserId: () => {}
};
export const MyContext = createContext(defaultContextValue);

// Create a provider component
export function MyContextProvider ( {children} ) {
    const [value1, setValue1] = useState<number>(null);
    const [value2, setValue2] = useState<number>(null);
    const [userId, setUserId] = useState<number>(null);
    
    return (
        <MyContext.Provider value={{ value1, value2,userId, setValue1, setValue2,setUserId }}>
            {children}
        </MyContext.Provider>
    );
};