import React, { useState } from 'react';
import { Table, Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../../App.css';
import BarData from '../BarData/BarData'
import PieData from '../PieData/PieData'

const DataTable = (props) => {
    //STarting data for table.
    const data = [
        {"name": "Kona", "quantity": 5, "date": "none"},
        {"name": "Columbian", "quantity": 3, "date": "none"},
        {"name": "Peruvian", "quantity": 7, "date": "none"},
        {"name": "Vietnamese Weasel", "quantity": 10, "date": "none"},
        {"name": "Armericano", "quantity": 2, "date": "none"},
    ]

    // Hooks Table State: Sets state with "data" as "infos".
    const [infos, setInfos] = useState(data);
    // Hooks Form State: Sets state of form inputs to empty strings.
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

    // Function Add Form Data to Table's State: After submit, adds form data to table state.
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
            <br></br>
            {/* Form Component */}
            <Container>
                <h5>Add a New Coffee</h5>
                    <Form onSubmit={handleAddFormSubmit}>
                        <Row>
                            <Col>
                                <Form.Control
                                    type='text'
                                    name='name'
                                    required='required'
                                    placeholder='Enter a coffee type...'
                                    onChange={handleFormChange}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type='text'
                                    name='quantity'
                                    required='required'
                                    placeholder='Enter an amount...'
                                    onChange={handleFormChange}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type='text'
                                    name='date'
                                    required='required'
                                    placeholder='Enter a date...'
                                    onChange={handleFormChange}
                                />
                            </Col>
                            <Col>
                                <Button type='submit'>Add to Table</Button>
                            </Col>
                        </Row>
                    </Form>
            </Container>
            <br></br>
            <br></br>
            {/* Bar Chart Component */}
            <BarData 
                infos={infos}
            />
            <br></br>
            <br></br>
            <PieData 
                infos={infos}
            />
            <br></br>
            <br></br>
        </div>
    )
}

export default DataTable;
