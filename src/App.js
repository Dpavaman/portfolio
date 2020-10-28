import React, { Fragment, useEffect, useState } from 'react';
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'
import { Parallax } from 'react-parallax';
import './App.css';
import NavBar from '../src/Components/NavBar/NavBar'
import MyCarousel from './Components/Carousal/Carousel';
import Introduction from './Components/Introduction/Introduction';
import About from './Pages/About/About';
import { Container } from 'react-bootstrap';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import FooterComponent from './Pages/Footer/Footer';
import ProgressBarComponent from './Components/ProgressBar/ProgressBar';

function App() {
  const prompts = [
    "LOADING FULL STACK 😊",
    'Please Wait...',
  ]
  const [complete, setComplete] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    setTimeout(() => {
      if (complete < 115) {
        const newVal = complete + Math.floor(Math.random() * 50)
        if (newVal > complete) {
          setComplete(newVal)
          if (complete < 50) {
            setMessage(prompts[0]);
          } else {
            setMessage(prompts[1]);
          }
        }
      } else {
        setLoaded(true)
      }
    }, 1500)
  }, [complete, prompts])

  return (


    <Fragment>
      {
        (loaded) ? (
          <div className="App" id='App'>
            <NavBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
            <div id='page-wrap'>
              <MyCarousel />
              <Introduction />
              <div className='pagesFromHere'>
                <div id='about'>
                  <Parallax
                    blur={{ min: -30, max: 30 }}
                    bgImage={require("./Assets/parallax-background.jpg")}
                    bgImageAlt=""
                    strength={-200}
                  >
                    <div>
                      <Container className="container-box rounded">
                        <Zoom Left>
                          <About />
                        </Zoom>
                      </Container>
                    </div>
                  </Parallax>
                </div>

                <div>
                  <br /> <br />
                  <Parallax
                    blur={{ min: -30, max: 30 }}
                    bgImage={require("./Assets/technologies-background.jpg")}
                    bgImageAlt=""
                    strength={-200}
                  >
                    <div>
                      <Container className="container-box rounded">
                        <Skills />
                      </Container>
                    </div>
                  </Parallax>
                </div>
                <br /> <br />
                <div>
                  <Parallax
                    blur={{ min: -30, max: 30 }}
                    bgImage={require("./Assets/project-background.jpg")}
                    bgImageAlt=""
                    strength={-200}
                  >
                    <div>
                      <Container className="container-box rounded">
                        <Bounce >
                          <Projects />
                        </Bounce>
                      </Container>
                    </div>
                  </Parallax>
                </div>
                <br /> <br />
                <div>
                  <Parallax
                    blur={{ min: -30, max: 30 }}
                    strength={-200}
                  >
                    <div>
                      <Container className="container-box rounded">
                        <Contact />
                      </Container>
                    </div>
                  </Parallax>
                </div>
                <hr />
                <FooterComponent />
              </div>
            </div>
          </div>
        ) : (
            <div className='loaderContainer'>
              <Bounce top >
                <Container className='loader' >
                  <h1 className='loadStatus' >{message}</h1>
                  <ProgressBarComponent complete={complete} />
                </Container>
              </Bounce>
              <h4 className='copyright' >©Pavaman Dabeer</h4>
            </div>
          )
      }
    </Fragment>
  );
}

export default App;
