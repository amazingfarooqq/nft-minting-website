import { useWeb3React } from "@web3-react/core";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { addDoc, collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { database } from "./firebase";


const Context = createContext({});
export const useContextAPI = () => useContext(Context);

export const ContextAPIProvider = ({ children }) => {

    const { library, account } = useWeb3React()

    const [signer, setSinger] = useState('')
    const [message, setMessage] = useState({ message: "", color: "", isMessage: false })
    const [usersData, setUsersData] = useState()
    const [user, setUser] = useState()

    console.log('userrrrrrrrrrrrrrrrrr', user);

    const registerToCollection = (documentName, dataObject) => {
        return setDoc(doc(database, 'users', documentName), dataObject);
    };

    const updateSellerRequests = (id, updateDataObject) => {
        const fieldToEdit = doc(database, "users", id);
        return updateDoc(fieldToEdit, updateDataObject);
    };

    const get_all_user_data = () => {
        const dababaseRef = collection(database, "users");
        getDocs(dababaseRef)
            .then((res) => {
                setUsersData(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            }).catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        get_all_user_data()
    }, [])

    const fetchuser = async () => {
        const dababaseRef = collection(database, "users");

        getDocs(dababaseRef).then((res) => {
            const data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

            const user = data.find(item => item.owneraddress === account)
            setUser(user)

            // navigate("/");


        }).catch((err) => {
            console.log(err);
        });
    }
    useEffect(() => {

        fetchuser()
    }, [account])



    console.log('signer', signer);
    useMemo(() => {
        if (library !== undefined) {
            console.log("defined library");

            setSinger(library?.getSigner(account));
        } else {
            console.log("undefined library");
        }
    }, [account]);

    return (
        <Context.Provider value={{ signer, setSinger, message, setMessage, registerToCollection, updateSellerRequests, usersData, user, setUser , fetchuser}}>
            {children}

        </Context.Provider>
    )
}
