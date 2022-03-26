import React, { useState } from 'react';
import { Table, Container, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';

const AddForm = (props) => {
    return (
        <div>
            <Container>
                {/* {props.infos.map((info) => ( */}
                {/* {info.name} */}
                <h5>Add a New Coffee</h5>
                    <form>
                        <input
                            type='text'
                            name='name'
                            required='required'
                            placeholder='Enter a coffee type...'
                            onChange={props.handleAddFormChange}
                        />
                        <input
                            type='text'
                            name='quantity'
                            required='required'
                            placeholder='Enter an amount...'
                            onChange={props.handleAddFormChange}
                        />
                        <input
                            type='text'
                            name='date'
                            required='required'
                            placeholder='Enter a date...'
                            onChange={props.handleAddFormChange}
                        />
                    </form>
                {/* ))} */}
            </Container>
        </div>
    )
}

export default AddForm;
