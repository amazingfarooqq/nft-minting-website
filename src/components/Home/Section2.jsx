import React from 'react'
import Card from './Card'


import img1 from './../../imgs/section2imgs/1.png'
import img2 from './../../imgs/section2imgs/2.png'
import img3 from './../../imgs/section2imgs/3.png'
import img4 from './../../imgs/section2imgs/4.png'

const obj = [
  {
    title: "Heading1",
    desc: "Lorem ipsum dolor sit consectetur adipisicing elit. Alias amet deleniti et fugit iusto nesciunt.",
    img: img1
  },
  {
    title: "Heading2",
    desc: "Lorem ipsum dolor sit consectetur adipisicing elit. Alias amet deleniti et fugit iusto nesciunt.",
    img: img2
  },
  {
    title: "Heading2",
    desc: "Lorem ipsum dolor sit consectetur adipisicing elit. Alias amet deleniti et fugit iusto nesciunt.",
    img: img3
  },
  {
    title: "Heading2",
    desc: "Lorem ipsum dolor sit consectetur adipisicing elit. Alias amet deleniti et fugit iusto nesciunt.",
    img: img4
  },
]
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
            {obj?.map(item => {
              return (
                <div className="col-md-4 col-lg-3">
                <div className="bg-light position-relative px-3 my-5">
                  <div
                    className="fw-bold circle  text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white"
                    style={{
                      width: 60,
                      height: 60,
                      top: "-30px",
                      borderWidth: "4px !important",
                    
                    }}
                  >
                    <img src={item.img} alt="" />
                  </div>
                  <div className="px-3 text-center pb-3">
                    <h4>{item.title}</h4>
                    <p className="font-weight-light my-3">{item.desc}</p>
                  </div>
                </div>
              </div>
              )
            })}
          
           
          </div>
        </section>
      </div>
      
    )
}

export default Section2