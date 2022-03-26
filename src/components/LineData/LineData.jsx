import React, { useState } from 'react';
import { Table, Container, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';
import { LineChart, Tooltip, CartesianGrid, XAxis, YAxis, Line } from 'recharts';

const LineData = (props) => {
    return (
        <div>
            <Container>
                <h5>Line Chart: Coffee Stock | Sold</h5>
                <LineChart width={1000} height={600} data={props.infos} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                    <CartesianGrid stroke="#ccc" />
                    <Line type="monotone" dataKey="stock" stroke="orange" yAxisId={0} />
                    <Line type="monotone" dataKey="sold" stroke="#0047ab" yAxisId={0} />
                </LineChart>
            </Container>
        </div>
    )
}

export default LineData;