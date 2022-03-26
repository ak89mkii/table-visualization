import React, { useState } from 'react';
import { Table, Container, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';
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

    // Hooks: Sets state with "data" as "infos".
    const [infos, setInfos] = useState(data);
    // Hooks: Sets state of form inputs to empty strings.
    const [addFormDatas, setAddFormDatas] = useState({
        name: '',
        quantity: '',
        date: ''
    });

    // Function Add Form Data to State: Sets state of "addFormDatas" to form input values.
    const handleFormChange = (event) => {
        event.preventDefault();

        // Gets name attribute of changed form input.
        const fieldName = event.target.getAttribute('name');
        // Gets the value of the changed form input.
        const fieldValue = event.target.value;

        // Copies form data without mutating state.
        const newFormData = {...addFormDatas};
        // Update "newFormData" with what is typed in form input.
        newFormData[fieldName] = fieldValue;
        
        // Sets "newFormData" to state.
        setAddFormDatas(newFormData);
    };

    // Function 
    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newInfo = {
            name: addFormDatas.name,
            quantity: addFormDatas.quantity,
            date: addFormDatas.date
        };

        const newInfos = [...infos, newInfo];
        setInfos(newInfos)
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
            <br></br>
            {/* Form Component */}
            <Container>
                <h5>Add a New Coffee</h5>
                    <form onSubmit={handleAddFormSubmit}>
                        <input
                            type='text'
                            name='name'
                            required='required'
                            placeholder='Enter a coffee type...'
                            onChange={handleFormChange}
                        />
                        <input
                            type='text'
                            name='quantity'
                            required='required'
                            placeholder='Enter an amount...'
                            onChange={handleFormChange}
                        />
                        <input
                            type='text'
                            name='date'
                            required='required'
                            placeholder='Enter a date...'
                            onChange={handleFormChange}
                        />
                        <button type='submit'>Add</button>
                    </form>
            </Container>
            <br></br>
            {/* Bar Chart Component */}
            <BarData 
                infos={infos}
            />
        </div>
    )
}

export default DataTable;
