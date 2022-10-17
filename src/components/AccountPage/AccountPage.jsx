import React from 'react'
import Header from '../Header/Header'

const AccountPage = () => {
  return (
    <div>
        <Header />

        <section>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-9">
          <h1 className="text-dark pt-4">Account information</h1>
          <p className='pb-4'>You can set preferred display name, create your profile URL and manage other personal settings.</p>
          <div className="card" style={{ borderRadius: 15 }}>
            <div className="card-body">
              <div className="row align-items-center pt-4 pb-3">
                <div className="col-md-3 ps-5">
                  <h6 className="mb-0">User name</h6>
                </div>
                <div className="col-md-9 pe-5">
                  <input type="text" className="form-control form-control-lg" />
                </div>
              </div>
              <hr className="mx-n3" />
              <div className="row align-items-center py-3">
                <div className="col-md-3 ps-5">
                  <h6 className="mb-0">YEM Pernum</h6>
                </div>
                <div className="col-md-9 pe-5">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="EX: 0000"
                  />
                </div>
              </div>
              <hr className="mx-n3" />
              <div className="row align-items-center py-3">
                <div className="col-md-3 ps-5">
                  <h6 className="mb-0">Email address</h6>
                </div>
                <div className="col-md-9 pe-5">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="example@example.com"
                  />
                </div>
              </div>
              <hr className="mx-n3" />
              <div className="row align-items-center py-3">
                <div className="col-md-3 ps-5">
                  <h6 className="mb-0">YEM Balance</h6>
                </div>
                <div className="col-md-9 pe-5">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="example@example.com"
                  />
                </div>
              </div>
              <hr className="mx-n3" />
              <div className="row align-items-center py-3">
                <div className="col-md-3 ps-5">
                  <h6 className="mb-0">Matic Balance</h6>
                </div>
                <div className="col-md-9 pe-5">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="example@example.com"
                  />
                </div>
              </div>
              <hr className="mx-n3" />
         
         
              <div className="px-5 py-4">
                <button  className="btn btn-primary btn-lg">
                  bUTTON
                </button>
              </div>
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