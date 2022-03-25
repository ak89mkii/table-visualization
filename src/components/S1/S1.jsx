import React, { Component } from 'react';
import { Navbar, Container, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';

class S1 extends Component {
    state = {
        // Subscribe Button:
        open: false
    }

    // Subscribe Button: Functions
    handleClick = () => this.setState((prevState) => ({ open: !prevState.open }))
    handleClose = () => this.setState({ open: false })

    render() {
        // Subscribe Button:
        const { open } = this.state
        return (
            <div className="s1">
                <Container>
                    <Row columns={1}>
                        <Col>
                            <Container text>
                                <h1 className="s1TitleSub">The Show Lowdown Index </h1>
                                <h5 className="s1">A breakdown of the most popular streaming services' pricing tiers and interactive costs total calculator.</h5>
                            </Container>
                            <br></br>
                            <br></br>
                        </Col>
                    </Row>
                </Container>

                <br></br>
            </div>
        )
    }
}

export default S1
