import React, { useState } from 'react';
import { Table, Container, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';

const BarData = (props) => {
    return (
        <div>
            <Container>
                {props.infos.map((info) => (
                    <p>{info.name}</p>
                ))}
            </Container>
        </div>
    )
}

export default BarData;
