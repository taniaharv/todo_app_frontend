import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import FontAwesome from "react-fontawesome";
const uuidv4 = require('uuid/v4');

class TaskForm extends React.Component {
    state = {
        text: ""
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: uuidv4(),
            text: this.state.text,
            complete: false
        });
        this.setState({
            text: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="input-box">
                    <input
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                        placeholder="Enter Task"
                    />
                </div>
                <div>
                    <Row>
                        <Col xs={10}></Col>
                        <Col xs={2}>
                            <Button
                                bstyle="danger"
                                bSize="large"
                                onClick={this.handleSubmit}
                            >
                                <FontAwesome name='plus' />
                            </Button>
                        </Col>
                    </Row>
                </div>
            </form>
        );
    }
}

export default TaskForm;