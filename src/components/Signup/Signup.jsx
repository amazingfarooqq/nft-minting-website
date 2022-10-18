import { useWeb3React } from '@web3-react/core'
import { ethers, utils } from 'ethers';
import React, { useState } from 'react'
import { useContextAPI } from '../../features/contextapi';
import Header from '../Header/Header'
import { IntegrationWallets } from '../Wallets/IntegrationWallets'

const signMessage = async ({ setMessage, message , signer}) => {
    try {
      console.log({ message });
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");
  
    //   const hexMessage = utils.hexlify(utils.toUtf8Bytes(message))
      const signature = await signer.signMessage(message);

      const address = await signer.getAddress();
        console.log({
            message,
            signature,
            address
        })
      return {
        message,
        signature,
        address
      };
    } catch (err) {
        console.log(err)
      setMessage({message: "Error processing.." , color: "danger" , isMessage: true});
    }
  };
  

const Signup = () => {
    const { active, account } = useWeb3React()

    const {setMessage , signer} = useContextAPI()

    const [userName, setUserName] = useState('')
    const [signatures, setSignatures] = useState([]);

    const usernamefunc = async () => {
        // setMessage();
        // setUsernameExist(true)

    }

    const signup = async () => {
        const sig = await signMessage({
            setMessage,
            message: userName,
            signer
          });
          if (sig) {
            setSignatures([...signatures, sig]);
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
                                <li className={`${!userName && 'fw-bold'}`}>Please input user name. {userName && `username: ${userName}`}</li>
                                <li className={`${userName && !account && 'fw-bold'}`}>Please connect your wallet.</li>
                                <li className={`${userName && account && 'fw-bold'}`}>Click the continue.</li>
                            </ol>
                        </div>

                        {!userName &&
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
                        {userName &&

                            <>
                                <div className='py-2'>
                                    <div className='text-start'>Wallet Address</div>
                                    <div className="form-control form-control-md text-start btn btn-light" >{active ? account : "Connect Wallet"}</div>
                                </div>

                                <div className='text-start mt-2'>
                                    {active ?
                                        <button className="btn btn-primary m-1 px-4 rounded-pill fs-5" onClick={signup}>
                                            Sign up
                                        </button>
                                        : <IntegrationWallets />
                                    }
                                </div>

                            </>
                        }



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup