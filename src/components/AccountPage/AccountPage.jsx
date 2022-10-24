import React, { useState } from 'react'
import { useContextAPI } from '../../features/contextapi'
import Header from '../Header/Header'

const AccountPage = () => {
  const { user, setUser, yourJoinedUsers } = useContextAPI()
  const [copyText, setcopyText] = useState('')

  async function copyTargetText(e) {
    try {
      await navigator.clipboard.writeText(e.target.innerText);
      setcopyText(`"${e.target.innerText}" copied to clipboard`)
      setTimeout(() => {
        setcopyText('')
      }, 3000);
      } catch (err) {
        setcopyText(`Failed to copy : ${e.target.innerText}`)
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
                        <input type="text" className="form-control fs-15" placeholder='Ex: 00000' />
                        <div className="input-group-append">
                          <span className="input-group-text btn btn-primary rounded-pill m-1 fs-5 px-4">Save</span>
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

                <div className="col-11 col-lg-10 mt-5 " >
                  <div style={{ fontWeight: "500" }} >Your Affiliate Code</div>
                  <button className='form-control btn form-control-lg  m-0 fs-15 py-3' style={{ backgroundColor: "rgba(255,0,0,0.2)", overflow: "hidden" }} onClick={copyTargetText} title="Copy to clipboard">{user?.owneraddress}</button>
                </div>
                {copyText &&
                  <span  className="col-11 col-lg-10  ">{copyText}</span>
                }
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