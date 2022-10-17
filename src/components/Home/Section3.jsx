import React from 'react'
import { Link } from 'react-router-dom'

const Section3 = () => {
  return (
    <div className='container-fluid  p-md-5'>

    <div className="row px-md-5" style={{display: 'flex' , alignItems: "center"}}>
        <div className="col-12 col-md-7 py-md-3">
            <h2 className='text-dark pt-5' style={{fontSize: "60px" , fontWeight: "700"}}>Affiliate Your <br /> Chance</h2>
            <p className='text-dark '>A chance to build your money machine and to start a bright future with us</p>
            <Link to="/signup" className='btn px-5 btn-primary fw-bold rounded-pill fs-3 fw-bold mb-5'>Sign up</Link>
        </div>
        <div className="col-12 col-md-5 p-3 " style={{boxShadow: "0px 0px 1px gray" , borderRadius: "10px"}}>
            <img className='img-fluid w-100' src="https://www.yemnation.com/static/media/6.e6e3ef1523ab0f01e85f.png" alt="not found"  style={{ borderRadius: "10px"}}/>
        </div>
    </div>
</div>
  )
}

export default Section3