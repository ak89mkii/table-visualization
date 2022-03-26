import React, { useState } from 'react';
import { Table, Container, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';
import '../../App.css';

const AddForm = (props) => {
    return (
        <div>
            <Container>
                {/* {props.infos.map((info) => ( */}
                {/* {info.name} */}
                    <form>
                        <input
                            type='text'
                            name='name'
                            required='required'
                            placeholder='Enter a coffee type...'
                        />
                        <input
                            type='text'
                            name='quantity'
                            required='required'
                            placeholder='Enter an amount...'
                        />
                        <input
                            type='text'
                            name='date'
                            required='required'
                            placeholder='Enter a date...'
                        />
                    </form>
                {/* ))} */}
            </Container>
        </div>
    )
}

export default AddForm;
