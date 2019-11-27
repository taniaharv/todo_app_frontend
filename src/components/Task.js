import React from "react";
import { Row, Col } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

export default props => (
    <div>
        <Row>
            <Col xs={10}>
                <p style={{ textDecoration: props.task.complete ? "line-through" : "" }}>{props.task.text}</p>
            </Col>
            <Col xs={1}>
                <Row style={{ paddingTop: '10px' }}>
                    <Col xs={6}>
                        <button onClick={props.toggleComplete}>
                            <FontAwesome name='times' />
                        </button>
                    </Col>
                    <Col xs={6}>
                        <button onClick={props.onDelete}>
                            <FontAwesome name='check' />
                        </button>
                    </Col>
                </Row>
            </Col>
        </Row>

    </div>


);