import React, { useState } from 'react';
import { Table, Container, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';
import { LineChart, Tooltip, CartesianGrid, XAxis, YAxis, Line } from 'recharts';

const PieData = (props) => {
    return (
        <div>
            <Container>
                <h5>Line Chart</h5>
                <LineChart width={1000} height={600} data={props.infos} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <XAxis dataKey="name" />
                <Tooltip />
                    <CartesianGrid stroke="#ccc" />
                    <Line type="monotone" dataKey="sold" stroke="#ff7300" yAxisId={0} />
                </LineChart>
            </Container>
        </div>
    )
}

export default PieData;