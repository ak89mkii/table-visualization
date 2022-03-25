import React, { Component, createRef } from 'react'
import '../../App.css'
import { Navbar, Container, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../Img/logo.png';
import Toggle from '../Toggle/Toggle.jsx';

const Nav = (props) => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand>
                <div className="d-inline-block align-center">
                <img
                    alt={logo}
                    src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"
                    className="logo"
                />            
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

