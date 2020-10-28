import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/col'
import Portrait from '../../Assets/myportrait.jpg'
import Button from 'react-bootstrap/Button'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <Container>
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col className='portrait' xs={12} md={5}>
                        <Row className='justify-content-center mb-2 mr-2'>
                            <img className='profile justify-content-end myPortrait' src={Portrait} alt='portrait' thumbnail fluid />
                        </Row>
                    </Col>
                    <Col xs={12} md={7}>

                        <Row className=' myDetails rounded'>
                            Hi there! I am <b>&nbsp;Pavaman Dabeer</b> <br /> <br />
                            <p> A passionate programmer, born and brought up in India. I am a Full Stack Web Developer with MongoDB, Express.js, React.js and Node.js as my tech stack.</p>
                            <p>An enthusiastic fresher with highly motivated and leadership skills.
                            Graduated with Bachelor of Technology from <b>&nbsp;Presidency University,Bangalore</b> &nbsp;in 2020
                            </p>
                            <ul class='left'>
                                <li>Motivated and eager to learn new things</li>
                                <li>Good communication skills in written and verbal both.</li>
                                <li>Ability to work in group as well as an individual.</li>
                            </ul>
                            <p>Currently looking for an opportuinity to work for an organization which provides me the platform to improve my skills and knowledge to growth along with the organization objective.</p>
                            <br />
                        </Row>

                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='moreInfo'>
                    <Col>
                        <a href="#contact"><Button className='m-2' variant='outline-primary'> Let's Talk</Button></a>
                    </Col>
                    <Col>
                        <a href="https://drive.google.com/file/d/179FRfgdzwARdQ2cX0MV2ON84h3CAzMgk/view?usp=sharing" target='_blank' rel='noopener noreferrer'  ><Button className='m-2' variant='outline-primary'>Download Resume</Button></a>
                    </Col>
                    <Col>
                        <a href="https://github.com/Dpavaman" target='_blank' rel='noopener noreferrer' ><Button className='m-2' variant='outline-primary'>  GitHub</Button></a>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default About