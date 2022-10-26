import { ethers } from 'ethers'
import React, { useState } from 'react'
import { useContextAPI } from '../../features/contextapi'
import Header from '../Header/Header'

const Section1 = () => {

  const [amount, setAmount] = useState('')
  const { contract, setMessage, user } = useContextAPI()

  const [isLoading, setIsLoading] = useState(false)


  const mintFunc = async () => {

    if (user) {
      if (amount > 0) {
        setIsLoading(true)
        try {
          const costOfToken = ethers.utils.formatEther(await contract?.cost(), 18)
          const totalamount = costOfToken * amount
          const tx = await contract?.mint(amount, { value: ethers.utils.parseEther(`${totalamount}`) })
          await tx.wait()
          setIsLoading(false)

          setMessage({ isMessage: true, message: "Mint done!", color: "success" })

        } catch (error) {
          setIsLoading(false)

          setMessage({ isMessage: true, message: error.reason || error.data?.message || error.message, color: "danger" })
        }
      } else {
        setMessage({ isMessage: true, message: "Invalid Input", color: "danger" })
      }
    } else {
      setMessage({ isMessage: true, message: "Sign up before you mint", color: "danger" })
    }
  }


  return (
    <div className='section1'>
      <Header />
      <div className='container-fluid  p-md-5'>

        <div className="row px-md-5" style={{ display: 'flex', alignItems: "center" }}>
          <div className="col-12 col-md-6 py-md-3">
            <h2 className='text-light pt-5' style={{ fontSize: "45px", fontWeight: "700" }}>Lorem <br /> Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
            <p className='text-light '>Your chance with our platform, discover the most outstanding NFT's in the metaverse. We support the YEM-Community!</p>

            <div className="col-11 col-lg-10 mt-2 mb-6">
              <div className='text-light' style={{ fontWeight: "500" }}>Amount of Tokens</div>

              <div className='row'>
                <div className="col-12">
                  <div className="input-group">
                    <input type="number" className="form-control fs-15" placeholder='Enter amount of token' value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <div className="input-group-append">
                      {isLoading ?
                      <span className="input-group-text btn btn-primary disabled rounded-pill m-1 fs-5 px-4">Processing...</span> :
                      <span className="input-group-text btn btn-primary rounded-pill m-1 fs-5 px-4" onClick={mintFunc}>Mint</span>
                      }
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/* <button className='btn px-5 btn-primary fs-3 rounded-pill mb-5'>Mint</button> */}
          </div>
          <div className="col-12 col-md-6 py-md-5">
            <img className='img-fluid' src="https://www.yemnation.com/static/media/about-hero-right.527e5abf19aca9c2985a.png" alt="not found" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1