import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Avatar extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={10}></Col>
                    <Col xs={2}>
                        <Image src="https://avatars2.githubusercontent.com/u/22134866?s=460&v=4" thumbnail circle />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Avatar;