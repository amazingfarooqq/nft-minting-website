import { useWeb3React } from "@web3-react/core";
import { createContext, useContext, useMemo, useState } from "react";

const Context = createContext({});
export const useContextAPI = () => useContext(Context);



export const ContextAPIProvider = ({ children }) => {

    const {library , account} = useWeb3React()

    const [signer, setSinger] = useState('')
    const [message, setMessage] = useState({ message: "", color: "", isMessage: false })


    console.log('signer' , signer);
    useMemo(() => {
        if (library !== undefined) {
            console.log("defined library");

            setSinger(library?.getSigner(account));
        } else {
            console.log("undefined library");
        }
    }, [account]);

    return (
        <Context.Provider value={{ signer, setSinger, message, setMessage }}> {children}</Context.Provider>
    )
}
