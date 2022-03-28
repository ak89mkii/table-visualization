import React, { useState } from 'react';
import { Table, Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../../App.css';
import BarData from '../BarData/BarData'
import LineData from '../LineData/LineData'

const DataTable = (props) => {
    //Srarting data for table.
    const data = [
        {"name": "Kona", "stock": 1000, "sold": 343},
        {"name": "Columbian", "stock": 117, "sold": 20},
        {"name": "Peruvian", "stock": 343, "sold": 91},
        {"name": "Weasel", "stock": 200, "sold": 117},
        {"name": "Armericano", "stock": 500, "sold": 50},
    ]

    // Hooks Table State: Sets state with "data" as "infos".
    const [infos, setInfos] = useState(data);
    // Hooks Form State: Sets state of form inputs to empty strings.
    const [addFormDatas, setAddFormDatas] = useState({
        name: '',
        stock: '',
        sold: ''
    });

    // Function Add Form Data to State: Sets state of "addFormDatas" to form input values.
    const handleFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...addFormDatas};
        newFormData[fieldName] = fieldValue;
        
        setAddFormDatas(newFormData);
    };

    // Function Add Form Data to Table's State: After submit, adds form data to table state.
    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newInfo = {
            name: addFormDatas.name,
            stock: addFormDatas.stock,
            sold: addFormDatas.sold
        };

        const newInfos = [...infos, newInfo];
        setInfos(newInfos)
        document.getElementById("test").reset();
    }

    return (
        <div>
            <Container>
                {/* Sets table type between "dark" and "" from "tableMode" props, controlled by "Toggle" */}
                <Table variant={props.tableMode} striped bordered hover>
                    <thead>
                        <tr>
                        <th>Coffee Type</th>
                        <th>Quantity in Stock</th>
                        <th>Quantity Sold</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Maps table data, "infos" state to table with "info" currentValue. */}
                        {infos.map((info) => (
                        <tr>
                        <td>{info.name}</td>
                        <td>{info.stock}</td>
                        <td>{info.sold}</td>
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
                    <Form id='test' onSubmit={handleAddFormSubmit}>
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
                                    name='stock'
                                    required='required'
                                    placeholder='Enter a quantity...'
                                    onChange={handleFormChange}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type='text'
                                    name='sold'
                                    required='required'
                                    placeholder='Enter amout sold...'
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
            {/* Bar Graph Component */}
            <BarData 
                infos={infos}
            />
            <br></br>
            <br></br>
            {/* Line Chart Component */}
            <LineData 
                infos={infos}
            />
            <br></br>
            <br></br>
        </div>
    )
}

export default DataTable;
