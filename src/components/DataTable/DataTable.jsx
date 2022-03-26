import React, { useState } from 'react';
import { Table, Container, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';
import AddForm from '../AddForm/AddForm'
import BarData from '../BarData/BarData'

const DataTable = (props) => {
    //Default data for table.
    const data = [
        {"name": "Kona", "quantity": 5, "date": "none"},
        {"name": "Columbian", "quantity": 3, "date": "none"},
        {"name": "Peruvian", "quantity": 7, "date": "none"},
        {"name": "Vietnamese Weasel", "quantity": 10, "date": "none"},
        {"name": "Armericano", "quantity": 2, "date": "none"},
    ]
    // Hooks: sets state with "data" as "infos".
    const [infos, setInfos] = useState(data);
    // Hooks: 
    const [infos, setInfos] = useState(data);
    // Function Add Form Data to Table: 
    handleFormChange =  (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        
    }

    return (
        <div>
            <Container>
                {/* Sets table type between "dark" and "" from "tableMode" props, controlled by "Toggle" */}
                <Table variant={props.tableMode} striped bordered hover>
                    <thead>
                        <tr>
                        <th>Coffee Type</th>
                        <th>Quantity</th>
                        <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Maps table data, "infos" state to table with "info" currentValue. */}
                        {infos.map((info) => (
                        <tr>
                        <td>{info.name}</td>
                        <td>{info.quantity}</td>
                        <td>{info.date}</td>
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
            {/* Form Component */}
            <AddForm />
            {/* Bar Chart Component */}
            <BarData 
                infos={infos}
            />
        </div>
    )
}

export default DataTable;
