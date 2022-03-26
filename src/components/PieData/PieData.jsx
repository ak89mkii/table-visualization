import React, { useState } from 'react';
import { Table, Container, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';

const PieData = (props) => {
    return (
        <div>
            <Container>
                <h5>PieData</h5>
                {props.infos.map((info) => (
                    <p>{info.name}</p>
                ))}
            </Container>
        </div>
    )
}

export default PieData;