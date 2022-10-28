import { useWeb3React } from '@web3-react/core'
import React, { useEffect, useState } from 'react'
import { useContextAPI } from '../../features/contextapi'
import Header from '../Header/Header'

const AccountPage = () => {
  const { user, setUser, yourJoinedUsers, updateSellerRequests, setMessage , sponsorName  } = useContextAPI()

  const [isLoading, setIsLoading] = useState(false)
  const [YEMPernum, setYEMPernum] = useState(null)
  const [updatedYEM, setUpdatedYEM] = useState(null)

  const { account } = useWeb3React()

  useEffect(() => {
    setYEMPernum(0)
    setUpdatedYEM(null)
  },[user])

  const YEMPernumFunc = async () => {
    if (YEMPernum && YEMPernum > 0) {
      setIsLoading(true)

      console.log(user.id);
      try {
        const txtofirebase = await updateSellerRequests(user.id, { YEMPernum })
        console.log('txtofirebase' , txtofirebase);
        setMessage({ message: "Per Num Added!", isMessage: true, color: "success" })
        setUpdatedYEM(YEMPernum)
        setIsLoading(false)
      } catch (error) {
        console.log('err', error);
        setMessage({ message: "Error, Please Refresh and try again.", isMessage: true, color: "danger" })
        setIsLoading(false)
      }

    } else {
      setMessage({ message: "invalid YEM Pernum!", isMessage: true, color: "danger" })
    }
  }

  return (
    <div>
      <Header />

      <section>
        <div className="container h-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <h1 className="text-dark pt-4 fw-bold">Account information</h1>
              <p className='pb-4 fs-5 text-secondary'>You can set preferred display name, create your profile URL and manage other personal settings.</p>

              <hr />

              <div className="row justify-content-center mb-5 mt-5">


                <div className="col-11 col-lg-10">
                  <div style={{ fontWeight: "500" }} className="pb-1">User name</div>
                  <div type="text" className='form-control form-control-lg  m-0 fs-15' style={{ backgroundColor: "rgba(0,0,255,0.2)" }}>{user?.userName}</div>
                </div>

                <div className="col-11 col-lg-10 mt-2 ">
                  <div style={{ fontWeight: "500" }}>YEM Pernum</div>

                  <div className='row'>
                    <div className="col-12">
                      <div className="input-group">
                        <div className="input-group-addon btn btn-dark" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                          {updatedYEM || user?.YEMPernum || 0}
                        </div>
                        <input type="number" className="form-control fs-15" value={YEMPernum} onChange={(e) => setYEMPernum(e.target.value)} placeholder='Ex: 00000' />
                        <div className="input-group-append">
                          {isLoading ?
                            <span className="input-group-text btn btn-primary rounded-pill m-1 fs-5 px-4 disabled">Processing..</span>
                            :
                            <span className="input-group-text btn btn-primary rounded-pill m-1 fs-5 px-4" onClick={YEMPernumFunc}>Save</span>
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                </div>


                <div className="col-11 col-lg-10 mt-3">
                  <div style={{ fontWeight: "500" }} >YEM Balance</div>
                  <div type="text" className='form-control form-control-lg  m-0 fs-15' style={{ backgroundColor: "rgba(0,0,255,0.2)" }}>0</div>
                </div>
                <div className="col-11 col-lg-10 mt-3">
                  <div style={{ fontWeight: "500" }} >Matic Balance</div>
                  <div type="text" className='form-control form-control-lg  m-0 fs-15' style={{ backgroundColor: "rgba(0,0,255,0.2)" }}>0.00000</div>
                </div>
                <div className="col-11 col-lg-10 mt-5">
                  <div style={{ fontWeight: "500" }} >Your Sponser</div>
                  <div type="text" className='form-control form-control-lg  m-0 fs-15' style={{ backgroundColor: "rgba(0,0,255,0.2)" }}>{sponsorName}</div>
                </div>

                <div className="col-11 col-lg-10 mt-1">
                  <div style={{ fontWeight: "500" }} >Your Affiliate Code</div>
                  <div type="text" className='form-control form-control-lg  m-0 fs-15' style={{ backgroundColor: "rgba(0,0,255,0.2)" }}>{user?.owneraddress}</div>
                </div>
                
                {/* <div className="col-11 col-lg-10 mt-1 " >
                  <div style={{ fontWeight: "500" }} >Your Affiliate Code</div>
                  <div className='form-control  form-control-lg  m-0 fs-15 py-3' style={{ backgroundColor: "rgba(255,0,0,0.2)", overflow: "hidden" }} >{user?.owneraddress}</div>
                </div> */}

                <div className="col-11 col-lg-10 mt-1">
                  <div style={{ fontWeight: "500" }} >Users used your affiliate code: ( {yourJoinedUsers?.length || 0} )</div>
                  <div type="text" className='form-control form-control-lg  m-0 fs-15' style={{ backgroundColor: "rgba(0,0,255,0.2)" }}>{yourJoinedUsers?.join(", ")}</div>
                </div>



              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AccountPage