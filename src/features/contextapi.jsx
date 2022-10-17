import { createContext, useContext, useState } from "react";

const Context = createContext({});
export const useContextAPI = () => useContext(Context);



export const ContextAPIProvider = ({ children }) => {

    const [provider, setProvider] = useState('')
    return (
        <Context.Provider value={{ provider, setProvider }}> {children}</Context.Provider>
    )
}
