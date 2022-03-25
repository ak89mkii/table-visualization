import React, { Component, createRef } from 'react'
import '../../App.css'
import { Navbar, Container, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../Img/01.png';
import Toggle from '../Toggle/Toggle.jsx';

const Nav = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <div className="d-inline-block align-center">
                {/* <Link to="/"> */}
                <img
                    alt=""
                    src={logo}
                    className="logo"
                />            
                {/* </Link> */}
                {' '}
                </div>
            </Navbar.Brand>
            <Navbar.Brand></Navbar.Brand>
            <Toggle
                icon={props.icon}
                toggleMode={props.toggleMode}
            />
        </Navbar>
    )
}

export default Nav;

