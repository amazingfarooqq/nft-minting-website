import React from 'react'
import Header from '../Header/Header'

const Section1 = () => {
  return (
    <div className='section1'>
    <Header />
    <div className='container-fluid  p-md-5'>

        <div className="row px-md-5" style={{display: 'flex' , alignItems: "center"}}>
            <div className="col-12 col-md-6 py-md-3">
                <h2 className='text-light pt-5' style={{fontSize: "45px" , fontWeight: "700"}}>Lorem <br /> Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                <p className='text-light '>Your chance with our platform, discover the most outstanding NFT's in the metaverse. We support the YEM-Community!</p>
                <button className='btn px-5 btn-primary fs-3 rounded-pill mb-5'>Mint</button>
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