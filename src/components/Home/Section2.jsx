import React from 'react'
import Card from './Card'

const Section2 = () => {
    return (
        <div className="container my-5">
        <section id="steps">
          <div className="text-center mb-5">
            <span>STEPS</span>
            <h2 className="fw-bold display-4 ">
              How It <span style={{ color: "#FFC107" }}>Works?</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="bg-light position-relative px-3 my-5">
                <div
                  className="fw-bold circle bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white"
                  style={{
                    width: 60,
                    height: 60,
                    top: "-30px",
                    borderWidth: "4px !important",
                  
                  }}
                >
                  1
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>Headline</h4>
                  <p className="font-weight-light my-3">
                    Lorem ipsum dolor sit consectetur adipisicing elit. Alias amet
                    deleniti et fugit iusto nesciunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-light position-relative px-3 my-5">
                <div
                  className="fw-bold bg-primary circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white"
                  style={{
                    width: 60,
                    height: 60,
                    top: "-30px",
                    borderWidth: "4px !important",
                  
                  }}
                >
                  2
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>Headline</h4>
                  <p className="font-weight-light my-3">
                    Lorem ipsum dolor sit consectetur adipisicing elit. Alias amet
                    deleniti et fugit iusto nesciunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-light  position-relative px-3 my-5">
                <div
                  className="fw-bold bg-primary circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white"
                  style={{
                    width: 60,
                    height: 60,
                    top: "-30px",
                    borderWidth: "4px !important",
                  
                  }}
                >
                  3
                </div>
                <div className="px-3 text-center pb-3">
                  <h4>Headline</h4>
                  <p className="font-weight-light my-3">
                    Lorem ipsum dolor sit consectetur adipisicing elit. Alias amet
                    deleniti et fugit iusto nesciunt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
    )
}

export default Section2