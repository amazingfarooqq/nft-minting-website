import { useWeb3React } from '@web3-react/core'
import { ethers, utils } from 'ethers';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useContextAPI } from '../../features/contextapi';
import Header from '../Header/Header'
import { IntegrationWallets } from '../Wallets/IntegrationWallets'


const Signup = () => {
    const { active, account } = useWeb3React()
    const [userName, setUserName] = useState('')

    const [userInputStepDone, setUserInputStepDone] = useState(false)
    const [userAddressStepDone, setUserAddressStep] = useState(false)

    const { registerToCollection, setMessage, usersData , fetchuser} = useContextAPI()


    const usernamefunc = async () => {

        
        if (!userName || userName.indexOf(" ") >= 0) {
            setMessage({ message: "Invalid Username!", isMessage: true, color: "danger" })
        } else {

            let isUserExistInDatabase = false;

            usersData?.map(item => {
                if (item.userName === userName) {
                    isUserExistInDatabase = true
                }
            })

            if (!isUserExistInDatabase) {
                setUserInputStepDone(true)
            } else {
                setMessage({ message: "Username Already Exist!", isMessage: true, color: "danger" })
            }
        }
    }

    const addressfunc = async () => {

        if (userName && userName.indexOf(" ") < 0 && account) {
            let userAddressExistInDatabase = false;

            usersData?.map(item => {
                if (item.owneraddress === account) {
                    userAddressExistInDatabase = true
                }
            })

            if (!userAddressExistInDatabase) {
                setUserAddressStep(true)
            } else {
                setMessage({ message: "Address Already Exists!", isMessage: true, color: "danger" })
            }
        }

    }

    const signup = async () => {
        if(!userName || userName.indexOf(" ") >= 0){
            setUserInputStepDone(false)
        }else if(!account){
            setUserAddressStep(false)
        }else {
            registerToCollection(`${userName}-${account}`, { userName, owneraddress: account })
            fetchuser()
        }
    }
    

    return (

        <div>
            <Header />

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-6">
                        <h1 className='fw-bold text-center'>Signup</h1>

                        <p className='pt-5'>Already have an account? Please login to the site with connecting your wallet.</p>

                        <div className="row px-4 py-2  rounded text-dark " style={{ backgroundColor: "rgba(255,0,0,.15)" }}>
                            <ol className='py-0 my-0'>
                                <li className={`${!userInputStepDone && 'fw-bold'}`}>Please input user name. {userName && `username: ${userName}`}</li>
                                <li className={`${userInputStepDone && !account && !userAddressStepDone && 'fw-bold'}`}>Please connect your wallet.</li>
                                <li className={`${userInputStepDone && active && userAddressStepDone && 'fw-bold'}`}>Click the continue.</li>
                            </ol>
                        </div>

                        {!userInputStepDone && !userAddressStepDone &&
                            <>
                                <div className='py-2'>
                                    <div className='text-start'>Username</div>
                                    <input
                                        className="form-control p-2 rounded-pill form-control-md"
                                        type="text"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder="Enter Username"
                                    />
                                </div>
                                <div className='text-start mt-2'>
                                    <button className="btn btn-primary m-1 px-4 rounded-pill fs-5" onClick={usernamefunc}>
                                        Next Step
                                    </button>

                                </div>
                            </>
                        }
                        {userInputStepDone && !userAddressStepDone &&

                            <>
                                <div className='py-2'>
                                    <div className='text-start'>Wallet Address</div>
                                    <div className="form-control form-control-md text-start btn btn-light" >{active ? account : "Connect Wallet"}</div>
                                </div>

                                <div className='text-start mt-2'>
                                    {active ?
                                        <button className="btn btn-primary m-1 px-4 rounded-pill fs-5" onClick={addressfunc}>
                                            Next Step
                                        </button>
                                        : <IntegrationWallets />
                                    }
                                </div>

                            </>
                        }


                        {userInputStepDone && userAddressStepDone &&
                            <button className="btn btn-primary m-1 px-4 rounded-pill fs-5" onClick={signup}>
                                Sign up
                            </button>
                        }



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup