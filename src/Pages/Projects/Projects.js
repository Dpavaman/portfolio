import React from "react";

// projects
import SimpleCalculator from "../../Assets/Thumbnails/Calculator.png";
import WeatherAPI from '../../Assets/Thumbnails/weatherAPI.png'
import NYtimes from '../../Assets/Thumbnails/Top-stories-NEWYORKTIMES-API.png'
import Hangman from '../../Assets/Thumbnails/Hangman-game.png'
import CovidDashboard from '../../Assets/Thumbnails/Covid-dashboard.png'
import StudentTeacherAssignment from '../../Assets/Thumbnails/mentor-mentee.png'
import Tictactoe from '../../Assets/Thumbnails/tic-tac-toe.png'
import ComingSoon from '../../Assets/Thumbnails/comingSoon.jpg'
import "./Projects.css";
import { Accordion, Button, Card, CardGroup, Container } from "react-bootstrap";

const TimeLine = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details pb-3">PROJECTS</h1>
            <Container>
                <CardGroup>
                    <Accordion>
                        <Card className='projectCard' >
                            <Card.Title variant='top'>Simple Calculator</Card.Title>
                            <Card.Img className='image' variant='top' src={SimpleCalculator} style={{ width: '350px', height: '150px' }} />
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                <Button variant='outline-primary' size='lg' block > PROJECT DETAILS </Button>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <b>Description:</b> <br /> Simple calculator that can perform fundamental arithmatic operations
                                                     <hr />
                                    <b>Features:</b>
                                    <ul className="list-styles pt-1">
                                        <li>Can perform basic arithmatic operations</li>
                                        <li>good UI and effects</li>
                                        <li>Keyboard focus enabled</li>
                                    </ul>
                                    <hr />
                                    <b>Tech used:</b>
                                    <ul>
                                        <li> <span className="p-2"> HTML5 </span> </li>
                                        <li> <span className="p-2">CSS3</span> </li>
                                        <li> <span className="p-2"> JavaScript</span></li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                            <a className='hyperlink' href='https://affectionate-goodall-cca398.netlify.app/' target='_blank' rel='noopener noreferrer'>
                                <Button variant='outline-dark'>
                                    Live Demo
                            </Button>
                            </a>
                            <a className='hyperlink' href='https://github.com/Dpavaman/Simple-Calculator' target='_blank' rel='noopener noreferrer'>
                                <Button variant='outline-dark'>
                                    Source Code
                            </Button>
                            </a>
                        </Card>

                        <Card className='projectCard' >
                            <Card.Title variant='top'>Weather Fetcher </Card.Title>
                            <Card.Img className='image' variant='top' src={WeatherAPI} style={{ width: '350px', height: '150px' }} />
                            <Accordion.Toggle as={Card.Header} eventKey="1" className="p-2 text-center accordian-main">
                                <Button variant='outline-primary' size='lg' block > PROJECT DETAILS </Button>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1" className="text-left">
                                <Card.Body>
                                    <b>Description:</b> <br /> This app uses <b>weather API</b> and displays the  present weather condition of countries fetched from REST countries API
                                                     <hr />
                                    <b>Features:</b>
                                    <ul className="list-styles pt-1">
                                        <li>Flag of each country is displayed</li>
                                        <li>Powered by Bootstrap framework</li>
                                        <li>Respoisive Design</li>
                                        <li>Information about each country such as Region, Lat, Long, Capital are displayed</li>
                                    </ul>
                                    <hr />
                                    <b>Tech used:</b>
                                    <ul>
                                        <li> <span className="p-2"> HTML5 </span> </li>
                                        <li> <span className="p-2">Bootstrap</span> </li>
                                        <li> <span className="p-2"> JavaScript</span></li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                            <a className='hyperlink' href='https://agitated-cray-dee38b.netlify.app/' target='_blank' rel='noopener noreferrer'>
                                <Button variant='outline-dark'>
                                    Live Demo
                            </Button>
                            </a>
                            <a className='hyperlink' href='https://github.com/Dpavaman/Weather-Fetcher' target='_blank' rel='noopener noreferrer'>
                                <Button variant='outline-dark'>
                                    Source Code
                            </Button>
                            </a>
                        </Card>

                        <Card className='projectCard' >
                            <Card.Title variant='top'>Top stories-Newyork Times API </Card.Title>
                            <Card.Img className='image' variant='top' src={NYtimes} style={{ width: '350px', height: '150px' }} />
                            <Accordion.Toggle as={Card.Header} eventKey="2" className="p-2 text-center accordian-main">
                                <Button variant='outline-primary' size='lg' block > PROJECT DETAILS </Button>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2" className="text-left">
                                <Card.Body>
                                    <b>Description:</b> <br /> This app uses <b>Newyork times API</b> and displays top stories of the day provided by the API with the related thumbnail
                                    a READ MORE button is available which redirects the user to the respective news page of Newyork Times website
                                                     <hr />
                                    <b>Features:</b>
                                    <ul className="list-styles pt-1">
                                        <li>Top stories of different domains are available</li>
                                        <li>User can select the domain using the breadcrumbs available at the top of the page</li>
                                        <li>Full article can be read by clicking on the READ MORE button which redirects the user to Newyork Times website</li>
                                    </ul>
                                    <hr />
                                    <b>Tech used:</b>
                                    <ul>
                                        <li> <span className="p-2"> HTML5 </span> </li>
                                        <li> <span className="p-2">Bootstrap</span> </li>
                                        <li> <span className="p-2"> JavaScript</span></li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                            <a className='hyperlink' href='https://pavaman-newyork-times-api.netlify.app/' target='_blank' rel='noopener noreferrer'>
                                <Button variant='outline-dark'>
                                    Live Demo
                            </Button>
                            </a>
                            <a className='hyperlink' href='https://github.com/Dpavaman/newyork-times-api' target='_blank' rel='noopener noreferrer'>
                                <Button variant='outline-dark'>
                                    Source Code
                            </Button>
                            </a>
                        </Card>

                        <Card className='projectCard' >
                            <Card.Title variant='top'>Hangman Game </Card.Title>
                            <Card.Img className='image' variant='top' src={Hangman} style={{ width: '350px', height: '150px' }} />
                            <Accordion.Toggle as={Card.Header} eventKey="3" className="p-2 text-center accordian-main">
                                <Button variant='outline-primary' size='lg' block > PROJECT DETAILS </Button>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3" className="text-left">
                                <Card.Body>
                                    <b>Description:</b> <br /> A game where player needs to guess the correct word based on the domain specified on the top inorder to save the man from hanging
                                                     <hr />
                                    <b>Features:</b>
                                    <ul className="list-styles pt-1">
                                        <li>This game does not uses any APIs</li>
                                        <li>Game can be played in three different levels Easy, Medium and Hard </li>
                                        <li>Domains and words are randomly displayed</li>
                                        <li>Number of lives vary based on the level selected</li>
                                        <li>Hint button will reveal the hint to guess the correct word</li>
                                        <li>This game is built completely with JavaScript DOM</li>
                                    </ul>
                                    <hr />
                                    <b>Tech used:</b>
                                    <ul>
                                        <li> <span className="p-2"> HTML5 </span> </li>
                                        <li> <span className="p-2">CSS3</span> </li>
                                        <li> <span className="p-2"> JavaScript</span></li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                            <a className='hyperlink' href='https://cranky-varahamihira-be7361.netlify.app/' target='_blank' rel='noopener noreferrer'>
                                <Button variant='outline-dark'>
                                    Live Demo
                            </Button>
                            </a>
                            <a className='hyperlink' href='https://github.com/Dpavaman/Hangman-Game' target='_blank' rel='noopener noreferrer'>
                                <Button variant='outline-dark'>
                                    Source Code
                            </Button>
                            </a>
                        </Card>

                        <Card className='projectCard' >
                            <Card.Title variant='top'>Student Teacher Assignment Portal </Card.Title>
                            <Card.Img className='image' variant='top' src={StudentTeacherAssignment} style={{ width: '350px', height: '150px' }} />
                            <Accordion.Toggle as={Card.Header} eventKey="4" className="p-2 text-center accordian-main">
                                <Button variant='outline-primary' size='lg' block > PROJECT DETAILS </Button>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4" className="text-left">
                                <Card.Body>
                                    <b>Description:</b> <br /> This app is a Full stack App which uses MongoDB to store submitted data. This app is a portal for assigning students of a school under a particular mentor
                                                     <hr />
                                    <b>Features:</b>
                                    <ul className="list-styles pt-1">
                                        <li>User can add students to the list</li>
                                        <li>user can add Mentors to the list</li>
                                        <li>Each student can be assigned as a mentee under a specific mentor</li>
                                        <li>List of mentors and List of Students can be viewed</li>
                                        <li>List of mentors also displays the names of students assigned to respective mentors.</li>
                                        <li>every data is stored into the database and fetched whenever requested for.</li>
                                        <li>Backend Source code is available <a href='https://github.com/Dpavaman/studentMentorAssignmentBackEnd' target="_blank" rel='noopener noreferrer' >Here</a></li>
                                    </ul>
                                    <hr />
                                    <b>Tech used:</b>
                                    <ul>
                                        <li> <span className="p-2"> HTML </span> </li>
                                        <li> <span className="p-2">JavaScript</span> </li>
                                        <li> <span className="p-2"> Css</span></li>
                                        <li> <span className="p-2">Node.js</span></li>
                                        <li> <span className="p-2">MongoDB</span></li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                            <a className='hyperlink' href='https://naughty-wiles-c647b3.netlify.app/' target='_blank' rel='noopener noreferrer'>
                                <Button variant='outline-dark'>
                                    Live Demo
                            </Button>
                            </a>
                            <a className='hyperlink' href='https://github.com/Dpavaman/StudentMentorAssignment_UI' target='_blank' rel='noopener noreferrer'>
                                <Button variant='outline-dark'>
                                    Source Code
                            </Button>
                            </a>
                        </Card>



                        <Card className='projectCard' >
                            <Card.Title variant='top'>Covid-19 Dashboard </Card.Title>
                            <Card.Img className='image' variant='top' src={CovidDashboard} style={{ width: '350px', height: '150px' }} />
                            <Accordion.Toggle as={Card.Header} eventKey="5" className="p-2 text-center accordian-main">
                                <Button variant='outline-primary' size='lg' block > PROJECT DETAILS </Button>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5" className="text-left">
                                <Card.Body>
                                    <b>Description:</b> <br /> App uses <b>https://covid19.mathdro.id/api</b> API to fetch current covid-19 status country-wise and globally.
                                                     <hr />
                                    <b>Features:</b>
                                    <ul className="list-styles pt-1">
                                        <li>Current status of COVID19 cases throughout the world is fetched from the API above said.</li>
                                        <li>A Country picker dropdown is placed at tha top of the page which user can use to check the covid-19 status of different countries </li>
                                        <li>Global option will display the current COVID-19 status of all the countries put together</li>
                                        <li>Bar graph is used to display country-wise data</li>
                                        <li>Line graph is used to display global data</li>
                                        <li>Total Affected / Tested Positive, Total Recovered and Total Death of Global and country-wise data is available</li>
                                    </ul>
                                    <hr />
                                    <b>Tech used:</b>
                                    <ul>
                                        <li> <span className="p-2"> React </span> </li>
                                        <li> <span className="p-2">Material UI</span> </li>
                                        <li> <span className="p-2"> JavaScript</span></li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                            <a className='hyperlink' href='https://elegant-northcutt-1dedc4.netlify.app/' target='_blank' rel='noopener noreferrer'>
                                <Button variant='outline-dark'>
                                    Live Demo
                            </Button>
                            </a>
                            <a className='hyperlink' href='https://github.com/Dpavaman/COVID19-DashBoard' target='_blank' rel='noopener noreferrer'>
                                <Button variant='outline-dark'>
                                    Source Code
                            </Button>
                            </a>
                        </Card>



                        <Card className='projectCard' >
                            <Card.Title variant='top'>Tic Tac Toe-React JS</Card.Title>
                            <Card.Img className='image' variant='top' src={Tictactoe} style={{ width: '350px', height: '150px' }} />
                            <Accordion.Toggle as={Card.Header} eventKey="6" className="p-2 text-center accordian-main">
                                <Button variant='outline-primary' size='lg' block > PROJECT DETAILS </Button>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="6" className="text-left">
                                <Card.Body>
                                    <b>Description:</b> <br /> This Game App is built using React JS
                                                     <hr />
                                    <b>Features:</b>
                                    <ul className="list-styles pt-1">
                                        <li>Tic-Tac-Toe App allows two players to place either a CROSS or a CIRCLE on their desired location in a 3X3 grid by clicking on the grid box</li>
                                        <li>The player who manages to place his symbol (Either cross or circle) in a straingth path of the grid will be announced winner by highlighting respective path </li>
                                        <li>Button below the play area (grid) restarts the game at any time</li>
                                    </ul>
                                    <hr />
                                    <b>Tech used:</b>
                                    <ul>
                                        <li> <span className="p-2"> React </span> </li>
                                        <li> <span className="p-2">CSS</span> </li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                            <a className='hyperlink' href='https://tender-hugle-083832.netlify.app/' target='_blank' rel='noopener noreferrer'>
                                <Button variant='outline-dark'>
                                    Live Demo
                            </Button>
                            </a>
                            <a className='hyperlink' href='https://github.com/Dpavaman/Tic-Tac-Toe_with_ReactJs' target='_blank' rel='noopener noreferrer'>
                                <Button variant='outline-dark'>
                                    Source Code
                            </Button>
                            </a>
                        </Card>

                        {/* OTHER PROJECTS ARE ON THE WAY */}

                        <Card className='projectCard comingSoon' >
                            <Card.Title variant='top'>MORE PROJECTS ON THE WAY... </Card.Title>
                            <Card.Img className='image' variant='top' src={ComingSoon} style={{ width: '100%', height: '150px' }} />
                            <Accordion.Toggle as={Card.Header} eventKey="updateSoon" className="p-2 text-center accordian-main">
                                <Button variant='outline-primary' size='lg' block > PROJECT DETAILS </Button>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="updateSoon" className="text-left">
                                <Card.Body>
                                    <h2> More Projects will be Updated Soon...!</h2>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>





                        {/* OTHER PROJECTS ON THE WAY */}



                    </Accordion>
                </CardGroup>
            </Container>
        </div>
    );
};

export default TimeLine;