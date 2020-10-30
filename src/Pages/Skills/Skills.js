import React from 'react'
import './Skills.css'
import Slide from 'react-reveal/Slide';
import { ReactComponent as HTML } from '../../Assets/Technologies/HTMLIcon.svg'
import { ReactComponent as CSS } from '../../Assets/Technologies/css3.svg'
import { ReactComponent as JS } from '../../Assets/Technologies/javascript.svg'
import { ReactComponent as BOOTSTRAP } from '../../Assets/Technologies/bootstrap-4.svg'
import { ReactComponent as NODE } from '../../Assets/Technologies/nodejs.svg'
import { ReactComponent as NPM } from '../../Assets/Technologies/npm.svg'
import { ReactComponent as EXPRESS } from '../../Assets/Technologies/expressjs.svg'
import { ReactComponent as MONGO } from '../../Assets/Technologies/mongodb.svg'
import { ReactComponent as REACT } from '../../Assets/Technologies/react.svg'
import { ReactComponent as MATERIAL } from '../../Assets/Technologies/material-ui.svg'
import { ReactComponent as GIT } from '../../Assets/Technologies/github-icon.svg'
import { ReactComponent as NETLIFY } from '../../Assets/Technologies/netlify.svg'
import { ReactComponent as HEROKU } from '../../Assets/Technologies/heroku.svg'
import { Container, Row } from 'react-bootstrap';

const Skills = () => {
    return (
        <div id='skills'>
            <h1 className="pt-3 text-center font-details pb-3" >Technologies I work with</h1>
            <Container fluid >
                <Container className='frontendSkills'>
                    <Row>
                        <Slide top>
                            <div className='skillsList'>
                                <h3 className='techDomain' >Front-end</h3>
                                <a href="https://en.wikipedia.org/wiki/HTML5" target='_blank' rel='noopener noreferrer' ><HTML className='skill-logo' /></a>
                                <a href="https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1" target='_blank' rel='noopener noreferrer' ><CSS className='skill-logo' /></a>
                                <a href="https://www.javascript.com/" target='_blank' rel='noopener noreferrer' ><JS className='skill-logo' /></a>
                                <a href="https://getbootstrap.com/" target='_blank' rel='noopener noreferrer' ><BOOTSTRAP className='skill-logo' /></a>
                                <a href="https://reactjs.org/" target='_blank' rel='noopener noreferrer' ><REACT className='skill-logo' /></a>
                                <a href="https://material-ui.com/" target='_blank' rel='noopener noreferrer' ><MATERIAL className='skill-logo' /></a>
                            </div>
                        </Slide>
                    </Row>
                </Container>
                <Container className='backendSkills'>
                    <Row>
                        <Slide left>
                            <div className='skillsList'>
                                <h3 className='techDomain' >Back-end</h3>
                                <a href="https://nodejs.org/en/docs/" target='_blank' rel='noopener noreferrer' ><NODE className='skill-logo' /></a>
                                <a href="https://docs.npmjs.com/" target='_blank' rel='noopener noreferrer' ><NPM className='skill-logo' /></a>
                                <a href="https://expressjs.com/en/guide/routing.html" target='_blank' rel='noopener noreferrer' ><EXPRESS className='skill-logo' /></a>
                            </div>
                        </Slide>
                    </Row>
                </Container>
                <Container className='deploymentSkills'>
                    <Row>
                        <Slide bottom>
                            <div className='skillsList'>
                                <h3 className='techDomain' >Database and Deployment</h3>
                                <a href="https://www.mongodb.com/" target='_blank' rel='noopener noreferrer' ><MONGO className='skill-logo' /></a>
                                <a href="https://github.com/" target='_blank' rel='noopener noreferrer' ><GIT className='skill-logo' /></a>
                                <a href="https://www.netlify.com/" target='_blank' rel='noopener noreferrer' ><NETLIFY className='skill-logo' /></a>
                                <a href="https://www.heroku.com/" target='_blank' rel='noopener noreferrer' ><HEROKU className='skill-logo' /></a>
                            </div>
                        </Slide>
                    </Row>
                </Container>
            </Container>
        </div>

    )
}

export default Skills