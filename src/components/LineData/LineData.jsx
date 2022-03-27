import React from 'react';
import { Container } from 'react-bootstrap';
import '../../App.css';
import { LineChart, Tooltip, CartesianGrid, XAxis, YAxis, Line,ResponsiveContainer } from 'recharts';

const LineData = (props) => {
    return (
        <Container>
            <h5>Line Chart: Coffee Stock | Sold</h5>
            <div className='chartContainer'>
                <ResponsiveContainer>
                    <LineChart width={1000} height={600} data={props.infos} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                            <CartesianGrid stroke="#ccc" />
                            <Line type="monotone" dataKey="stock" stroke="orange" yAxisId={0} />
                            <Line type="monotone" dataKey="sold" stroke="#0047ab" yAxisId={0} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Container>
    )
}

export default LineData;