import React from 'react';
import { Container } from 'react-bootstrap';
import '../../App.css';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer  } from 'recharts';

const BarData = (props) => {
    return (
        <Container> 
            <h5>Bar Graph: Coffee Stock | Sold</h5>
            <div className='chartContainer'>
            <ResponsiveContainer>
                <BarChart width={1000} height={600} data={props.infos}>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="stock" fill="orange" />
                    <Bar dataKey="sold" fill="#0047ab" />
                </BarChart>
            </ResponsiveContainer>
            </div>
         </Container>
    )
}

export default BarData;
