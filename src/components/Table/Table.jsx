import React, { Component } from 'react';
import { Card, Container, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';

class Table extends Component {
    state = {
        open: false
    }

    render() {
        const { open } = this.state
        return (
            <div className="tableText">
                <Container>

                </Container>
            </div>
        )
    }
}

export default Table;
