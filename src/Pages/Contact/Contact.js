import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './Contact.css'


const Contact = () => {
    return (
        <div id='contact'>
            <h1 className="pt-3 text-center font-details pb-3" >Contact Me</h1>
            <Jumbotron className='contact-Jumbo'>
                <Row>
                    <Col className='d-flex justify-content-center flex-wrap'>
                        <div className="m-2">
                            <a href="mailto:pavamandabeer.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="pavamandabeer@gmail.com">
                                    <i className="fas fa-envelope-square"></i> Email Me
                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/pavaman-dabeer/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Visit my LinkenIn">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://github.com/Dpavaman" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="My other projects">
                                    <i className="fab fa-github-square"></i> GitHub
                </Button>
                            </a>
                        </div>


                        <div className="m-2">
                            <a href="https://www.facebook.com/dpavaman" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Say hello on FB">
                                    <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
                            </a>
                        </div>

                        <div className="m-2">
                            <a href="https://www.instagram.com/d_pavaman/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="My Instagram account">
                                    <i className="fab fa-instagram"></i> Instagram
                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default Contact