import { useWeb3React } from "@web3-react/core";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { addDoc, collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { database } from "./firebase";
import { ethers } from "ethers";
import { contractabi, contractAddress } from "../contractinfo/contractdetails";


const Context = createContext({});
export const useContextAPI = () => useContext(Context);

export const ContextAPIProvider = ({ children }) => {

    const { library, account , active } = useWeb3React()

    const [signer, setSinger] = useState('')
    const [message, setMessage] = useState({ message: "", color: "", isMessage: false })
    const [usersData, setUsersData] = useState()
    const [user, setUser] = useState()
    const [contract, setContract] = useState()
    const [yourJoinedUsers, setYourJoinedUsers] = useState()


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
                const users = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setUsersData(users)
            }).catch((err) => {
                console.log(err);
            });
    }

    const get_current_user = () => {
        const dababaseRef = collection(database, "users");
        getDocs(dababaseRef)
            .then((res) => {
                const users = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setUsersData(users)
                const user = users.find(item => item.owneraddress === account)

                if(user){
                setMessage({ message: "You are Logged In.", isMessage: true, color: "success" })

                }
                setUser(user)
            }).catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        get_all_user_data()
    }, [])
    useEffect(() => {
        if(active){
            get_current_user()
        }
    }, [account])



    const fetchContract = async () => {
        if (active) {

            try {
                const Contract = new ethers.Contract(contractAddress,contractabi,signer);
                console.log('contract' , Contract);
                setContract(Contract)
                const joinedUsersWithYou = await Contract.yourJoinedUsers()
                setYourJoinedUsers(joinedUsersWithYou)
            } catch (error) {

            }
        }
    }

    useEffect(() => {
        fetchContract()
    }, [account])



    useMemo(() => {
        if (library !== undefined) {
            console.log("defined library");

            setSinger(library?.getSigner(account));
        } else {
            console.log("undefined library");
        }
    }, [account]);

    return (
        <Context.Provider value={{ signer, setSinger, message, setMessage, registerToCollection, updateSellerRequests, usersData, user, setUser , contract , get_current_user , yourJoinedUsers}}>
            {children}

        </Context.Provider>
    )
}
