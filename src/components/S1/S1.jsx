import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../App.css';

class S1 extends Component {
    state = {

    }

    render() {
        return (
            <div className="s1">
                <Container>
                    <Row columns={1}>
                        <Col>
                            <Container text>
                                <h1 className="s1TitleSub">Table Visualizations App </h1>
                                <h5 className="s1">Add data to the table and the below bar and line charts visualize the corresponding data</h5>
                            </Container>
                            <br></br>
                            <br></br>
                        </Col>
                    </Row>
                </Container>

                <br></br>
            </div>
        )
    }
}

export default S1
