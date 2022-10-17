import { useWeb3React } from '@web3-react/core'
import React from 'react'
import Header from '../Header/Header'
import { IntegrationWallets } from '../Wallets/IntegrationWallets'

const Signup = () => {
    const { active, account } = useWeb3React()
    return (

        <div>
            <Header />

            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5 text-center">
                        <h1 className='fw-bold'>Signup</h1>

                        <p className='pt-5'>Already have an account? Please login to the site with connecting your wallet.</p>

                        <div className='py-2'>
                            <div className='text-start'>Username</div>
                            <input
                                className="form-control form-control-md"
                                type="text"
                                placeholder="Enter Username"
                            />

                        </div>
                        <div className='py-2'>
                            <div className='text-start'>Wallet Address</div>
                            <div className="form-control form-control-md text-start btn btn-secondary" >{active?account:"Connect Wallet"}</div>
                            
                        </div>

                        <div className='text-start mt-2'>
                            {active ?
                                <button className="btn btn-primary m-1 px-4 rounded-pill fs-5">
                                    Sign up
                                </button>
                                : <IntegrationWallets />
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup