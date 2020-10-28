import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import './ProgressBar.css'

const ProgressBarComponent = ({ complete, message }) => {

    return (
        <div className='loaderContainer'>
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <div className="content">
                            <h1 className='loadStatus' >{message}</h1>
                            <ProgressBar animated now={complete} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProgressBarComponent


