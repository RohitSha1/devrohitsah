/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import { Button } from "react-bootstrap";
// import { FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./Header.css";
import "../css/index.css";
import logo from '../images/ic_logo.png';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Header = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const common = {
        marginRight:'0.5rem',
        fontSize:24,
        letterSpacing:".5px"
    }

    return (
        <>
            <Navbar className='bar-container' variant="transparent">
                <Container>
                    <div className="hamburgur">
                        <div className="logo-container">
                            <a href="/" style={{ textDecoration: "none" }}>
                            <img src={logo} alt="Logo" className={"logo-image"} />
                            </a>
                        </div>
                        {/* <h2 className="mt-2" style={{ color: "#36454F" }}>
                            <NavLink to="/" style={{ textDecoration: "none" }}>Rohit Sah</NavLink>
                        </h2> */}
                        <i className="fa fa-bars inner" onClick={handleShow} aria-hidden="true" style={{ cursor: "pointer" }}></i>
                    </div>

                    <Nav className="nav">
                        <div className='represntColor mt-2'>
                            <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
                            <NavLink to="/playlist" className="text-decoration-none" style={common}>Projects</NavLink>
                            <NavLink to="/contact" className="text-decoration-none" style={common}>Contact</NavLink>
                        </div>
                        <div className="mt-2">
                                <Button variant="danger" style={{letterSpacing: ".5px", marginLeft: 5 }}><a href="https://youtu.be/kjU1iUXxxz0" target="_blank" rel="noreferrer noopener"className="text-decoration-none text-light">YouTube</a></Button>
                        </div>
                        

                    </Nav>
                </Container>
                {/* side baar */}
                {/* <div className="App" id="outer-container">
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                    <div id="page-wrap">
                        <h1>Cool Restaurant</h1>
                        <h2>Check out our offerings in the sidebar!</h2>
                        </div>
                </div> */}
                <Offcanvas  show={show} onHide={handleClose} style={{ maxWidth: '65%', width: '65%' }}>
                {/* <Offcanvas.Header closeButton className="customheader"> */}

                    {/* <Offcanvas.Header closeButton style={{ backgroundColor: '#f1f1f1' }}> */}
                    <Offcanvas.Body>
                        {/* <div style={{ padding: '1rem' }}> */}

                        <div className='side_nav' onClick={() => setShow(false)}>
                            <NavLink to="/" className="text-decoration-none link-item mt-5 mb-3" style={common}><FaHome style={{ marginRight: '0.5rem' }} />Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none link-item mt-3 mb-3" style={common}><FaInfoCircle style={{ marginRight: '0.5rem' }} />About</NavLink>
                            <NavLink to="/playlist" className="text-decoration-none link-item mt-3 mb-3" style={common}><FaProjectDiagram style={{ marginRight: '0.5rem' }} />Project</NavLink>
                            <NavLink to="/contact" className="text-decoration-none link-item mt-3 mb-3" style={common}><FaEnvelope style={{ marginRight: '0.5rem' }} />Contact</NavLink>
                            <div className="side-button mt-5 mb-3">
                                <Button variant="danger" style={{letterSpacing: "2px", marginTop: 150, padding: 0, marginLeft: -5 }}><a href="https://youtu.be/kjU1iUXxxz0" target="_blank" rel="noreferrer noopener"className="text-decoration-none text-light">Youtube</a></Button>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>
        </>
    )
}

export default Header