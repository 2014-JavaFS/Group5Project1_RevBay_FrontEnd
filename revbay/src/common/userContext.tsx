import { createContext, useMemo, useState } from "react";
const defaultContextValue = {
    userIdContext:null,
    setUserId: () => {}
};
export const MyUserContext = createContext(defaultContextValue);

// Create a provider component
export function MyUserContextProvider ( {children} ) {
    const [userIdContext, setUserId] = useState<number>(null);
    const contextValue = useMemo(
        () => ({ userIdContext, setUserId }),
        [userIdContext]
    );
    return (
        <MyUserContext.Provider value={contextValue}>
            {children}
        </MyUserContext.Provider>
    );
};