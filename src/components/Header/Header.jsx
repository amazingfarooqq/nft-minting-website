import { useWeb3React } from '@web3-react/core';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useContextAPI } from '../../features/contextapi';
import { IntegrationWallets } from '../Wallets/IntegrationWallets';

function Header({ page }) {

    const { active, account, deactivate } = useWeb3React()

    const location = useLocation()
    if (location.pathname == '/signup' || location.pathname == '/account' || location.pathname == '/affiliate') {
        return (
            <Navbar collapseOnSelect expand="lg" variant="light" bg="light" className=" px-md-5  py-4" style={{ backgroundColor: "transparent !important" }}>
                <div className="container-fluid">

                    <Navbar.Brand href="#home" className=" fs-2">Website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <div>
                                <Link to="/" className="mx-1 btn" style={{ textDecoration: "none" }}>
                                    Home
                                </Link>
                                <Link to="/affiliate" className="mx-1 btn" style={{ textDecoration: "none" }}>
                                    Affiliate
                                </Link>
                                <Link to="/account" className="mx-1 btn btn-secondary rounded-pill" style={{ textDecoration: "none" }}>
                                    My account
                                </Link>

                            </div>

                        </Nav>
                        <Nav>
                            {active ?
                                <button className="btn btn-primary m-1 px-4 rounded-pill fs-5" onClick={() => deactivate()}>
                                    {`${account?.slice(0,4)}...${account?.slice(-4)}`}
                                </button> :
                                <IntegrationWallets />
                            }
                            <Link to="/signup" className="btn btn-light  m-1 rounded-pill fs-5">Sign up</Link>

                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    } else {
        return (
            <Navbar collapseOnSelect expand="lg" variant="dark" className=" px-md-5 py-4" style={{ backgroundColor: "transparent !important" }}>
                <div className="container-fluid">

                    <Navbar.Brand href="#home" className=" fs-2">Website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="mx-1 btn text-light" style={{ textDecoration: "none" }}>
                                Home
                            </Link>
                            <Link to="/affiliate" className="mx-1 btn text-light" style={{ textDecoration: "none" }}>
                                Affiliate
                            </Link>
                            <Link to="/account" className="mx-1 btn text-light btn-secondary rounded-pill" style={{ textDecoration: "none" }}>
                                My account
                            </Link>

                        </Nav>
                        <Nav>
                            {active ?
                                <button className="btn btn-primary m-1 px-4 rounded-pill fs-5" onClick={() => deactivate()}>
                                    {`${account?.slice(0,4)}...${account?.slice(-4)}`}
                                </button> :
                                <IntegrationWallets />
                            }
                            <Link to="/signup" className="btn btn-light  m-1 rounded-pill fs-5">Sign up</Link>

                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );

    }
}

export default Header;