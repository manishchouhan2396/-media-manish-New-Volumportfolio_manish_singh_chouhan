import { React } from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import ecommerce from "../media/ecommerce.png"
import indianexpress from "../media/indianexpress.png"




const Projects = ({ darkMode }) => {

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
                <Container>
                    <br></br>
                    <h2 className="lead" align="center"><b>- Projects -</b></h2>
                    <br></br>
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br></br>
                                    <center style={{ height: '336px' }}>
                                        <div className="flip-card" class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={indianexpress} />
                                                    <Card.Body>
                                                        <Card.Title align="center">-Clone Of Indian Express-</Card.Title>
                                                        <Card.Text>
                                                            <td style={{ fontSize: "14px" }}>
                                                                <p align="center">Features</p>
                                                                <tr>Sign-up & Log-In</tr>
                                                                <tr>OTP Verification</tr>
                                                                <tr>Multiple News pages with filter</tr>
                                                                <tr>Header and Footer with routing functionality</tr>
                                                            </td>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">


                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" />



                                                    {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" /> */}

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br></br>
                                    <br />
                                    <div>
                                        <a href="https://62ff4a0819ae1d6132e30b21--indian-express-037.netlify.app/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                        </a>
                                        <a href="https://github.com/manish-2396/IndianExpress_Clone" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br></br>
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br></br>
                                    <center >
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={ecommerce} />
                                                    <Card.Body>
                                                        <Card.Title align="center">-Clone Of E-Commerce WebSite-</Card.Title>
                                                        <Card.Text>
                                                            <td style={{ fontSize: "14px" }}>
                                                                <p align="center">Features</p>
                                                                <tr>Sign-up page</tr>
                                                                <tr>Add to carts</tr>
                                                                {/* <tr>Various filter functionalities.</tr>
                                                                <tr>Product page with Pincode verification.</tr> */}
                                                            </td>

                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />

                                                    <br />

                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />







                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" />

                                                    {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" /> */}

                                                    {/* <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" /> */}


                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br></br>
                                    <div>

                                        <a href="https://62ff3ae9d580be4ed3244f0a--e-com-website.netlify.app/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                        </a>

                                        <a href="https://github.com/manish-2396/E-com-website" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br></br>
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br></br>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src="https://user-images.githubusercontent.com/100896129/186493915-cdc21735-7c0e-4bd3-9d36-81cdacd456d9.png" />
                                                    <Card.Body>
                                                        <Card.Title align="center">-Clone of YouTube-</Card.Title>
                                                        <Card.Text>
                                                            <td style={{ fontSize: "14px" }}>
                                                                <p align="center">Features</p>
                                                                <tr>Searching Video</tr>
                                                                <tr>Single Video Page</tr>
                                                                {/* <tr>Add to the cart page and checkout page.</tr>
                                                                <tr>contact-us and review page..</tr> */}
                                                            </td>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
                                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br></br>
                                    <div>
                                        <a href="https://youtube-vert.vercel.app/" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                                        </a>
                                        <a href="https://github.com/manish-2396/youtubeclone" target="_blank" rel="noreferrer noopener">
                                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br></br>
                                </Card>
                            </Col>
                        </Row>
                    </Zoom>
                    <br></br>
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>

                            </Col>
                            <Col lg={4} sm={12}>

                            </Col>
                            <Col lg={4} sm={12}>

                            </Col>
                        </Row>
                    </Zoom>
                </Container>
            </Fade>
            <br></br>


        </div>
    )
}

export default Projects
