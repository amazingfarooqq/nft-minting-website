import { useWeb3React } from '@web3-react/core';
import { Image, NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useContextAPI } from '../../features/contextapi';
import { IntegrationWallets } from '../Wallets/IntegrationWallets';
import img from "./../../imgs/dp-sample-img.jpg"

function Header({ page }) {

    const { active, account } = useWeb3React()

    const { user  , sigout} = useContextAPI()

    const location = useLocation()





    return (
        <Navbar collapseOnSelect expand="lg" className=" px-md-5 py-4" style={{ backgroundColor: "transparent !important" }}>
            <div className="container-fluid">

                <Navbar.Brand href="#home" className={`fs-2 ${location.pathname !== '/' ? "text-dark" : "text-light"}`}>NFT Minting</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-light" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <div>
                            <Link to="/"
                                className={`mx-1 btn rounded-pill 
                                    ${location.pathname !== '/' ? "text-dark" : "text-light"}
                                    ${location.pathname == '/' && "btn-secondary"}`}
                                style={{ textDecoration: "none" }}>Home</Link>
                            {location.pathname == '/'   &&
                                <a href="#affiliateSection"
                                    className={`mx-1 btn rounded-pill 
                                    ${location.pathname !== '/' && location.pathname !== '/affiliate' ? "text-dark" : "text-light"}
                                    ${location.pathname == '/affiliate' && "btn-secondary text-light"}`}
                                    style={{ textDecoration: "none" }}> Affiliate </a>
                            }
                            {user &&
                                <Link to="/account"
                                    className={`mx-1 btn rounded-pill 
                                 ${location.pathname !== '/' && location.pathname !== '/account' ? "text-dark" : "text-light"}
                                 ${location.pathname == '/account' && "btn-secondary"}`}
                                    style={{ textDecoration: "none" }}>My account</Link>
                            }

                        </div>

                    </Nav>
                    <Nav>

                        {active ?
                            <button className="btn btn-primary m-1 px-4 rounded-pill fs-5" onClick={sigout}>
                                {`${account?.slice(0, 4)}...${account?.slice(-4)}`}
                            </button> :
                            <IntegrationWallets />
                        }

                        {user ?
                            <NavDropdown
                                title={
                                    <Image
                                        src={img}
                                        alt="UserName profile image"
                                        roundedCircle

                                        style={{ width: '40px', height: "40px", border: "1px solid transparent", outline: "1px solid white" }}
                                    />
                                }
                                align="end"
                            >

                                <Link to="/account" className='py-3 btn w-100  text-start'>
                                    Profile
                                </Link>
                                <NavDropdown.Divider />
                                <button className=' btn w-100  text-start m-0' onClick={sigout}>
                                    Sign out
                                </button>
                            </NavDropdown>
                            :
                            <>
                                {location.pathname !== '/signup' && <Link to="/signup" className="btn btn-light  m-1 rounded-pill fs-5">Sign up</Link>}
                            </>

                        }
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Header;