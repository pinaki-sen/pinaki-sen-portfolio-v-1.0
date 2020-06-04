import React, {useEffect, useState} from 'react'
import "../styles.css"
import Base from "./Base"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'


import image_5 from "../images/image-5.png"
import image_2 from "../images/image-2.png"
import image_3 from "../images/image-3.png"
import image_4 from "../images/image-4.jfif"
import image_7 from "../images/image-7.jpg"
import image_8 from "../images/image-8.png"
import image_9 from "../images/image-9.png"
import image_10 from "../images/image-10.png"
import image_11 from "../images/image-11.png"
import image_12 from "../images/image-12.jfif"
import image_13 from "../images/image-13.png"
import image_14 from "../images/image-14.png"
import image_19 from "../images/image-19.png"




const Projects = () => {
    return (
        <Base title="Projects" description="Welcome" className="bg-secondary text-white p-4">

            <Container fluid="md">
                <Card className="bg-dark text-white">
                    <Card.Img src={image_5} alt="Card image" />
                    
                </Card>
            </Container>


            <Container className="text-center bg-scondary p-4">
                <Row className="text-center">
                    <h1 className="text-center">Web Applications</h1>
                </Row>
                <Row>
                    <CardGroup className="p-4">
                        <Card bg={'dark'} style={{ width: '18rem' }} className="p-2">
                            <Card.Img variant="top" src={image_19} />
                            <Card.Body>
                                <Card.Title>Web Application</Card.Title>
                                <Card.Text>
                                    built a Website from Scratch using React.js, 
                                    for a Florist and Horticulturist company
                                </Card.Text>
                                <Button variant="primary" href="https://sen-suppliers.now.sh/">Visit Website</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <CardGroup className="p-4">
                        <Card bg={'dark'} style={{ width: '18rem' }} className="p-2">
                            <Card.Img variant="top" src={image_14} />
                            <Card.Body>
                                <Card.Title>Personal portfolio</Card.Title>
                                <Card.Text>
                                    built a personal portfolio, based on 
                                    React.js, bootstrap
                                </Card.Text>
                                <Button variant="primary" href="/">Go to portfolio</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <CardGroup className="p-4">
                        <Card bg={'dark'} style={{ width: '18rem' }} className="p-2">
                            <Card.Img variant="top" src={image_2} />
                            <Card.Body>
                                <Card.Title>E-commerce Web Application</Card.Title>
                                <Card.Text>
                                    built an E-commerce Website from Scratch using MERN stack, 
                                    having authentication system and integrated Payment gateway
                                </Card.Text>
                                <Button variant="primary" href="https://ecommerce-web-app-lake.now.sh/">Go to Web App</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <CardGroup className="p-4">

                        <Card bg={'dark'} style={{ width: '18rem' }} className="p-2">
                            <Card.Img variant="top" src={image_7} />
                            <Card.Body>
                                <Card.Title>Django based Web App</Card.Title>
                                <Card.Text>
                                    A Django based Web Application integrated with PostgreSQL in backend,
                                    currently under Developent, aiming to upliftment of TRIBAL people 
                                    by selling their crafts
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/senpinaki222/TRIBE">Github Link</Button>
                            </Card.Body>
                        </Card>

                        
                    </CardGroup>
                </Row>

                <Row className="text-center">
                    <h1 className="text-center">Machine Learning / Data Visualization / Data PLotting</h1>
                </Row>

                <Row>
                    <CardGroup className="p-4">
                        <Card bg={'dark'} style={{ width: '18rem' }} className="p-2">
                            <Card.Img variant="top" src={image_3} />
                            <Card.Body>
                                <Card.Title>ML model to autotag image</Card.Title>
                                <Card.Text>
                                    Developed a Deep learning model to autotag images of Gala, 
                                    while taking part in HackerEarth Machine Learning Contest
                                </Card.Text>
                                <Button variant="primary" href="https://www.kaggle.com/senpinaki222/autotag-images-of-gala">Go to Notebook</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <CardGroup className="p-4">
                        <Card bg={'dark'} style={{ width: '18rem' }} className="p-2">
                            <Card.Img variant="top" src={image_8} />
                            <Card.Body>
                                <Card.Title>Digit Recognizer</Card.Title>
                                <Card.Text>
                                    Developed a Machine Learning Model to recognize 28X28 images of single digits
                                    Model was trained on MNIST datast. part of Kaggle Data Science Competition.
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/senpinaki222/digit_recognizer_mnist_dataset">Github Link</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <CardGroup className="p-4">
                        <Card bg={'dark'} style={{ width: '18rem' }} className="p-2">
                            <Card.Img variant="top" src={image_9} />
                            <Card.Body>
                                <Card.Title>COVID-19 Data plotting</Card.Title>
                                <Card.Text>
                                    As a part of kaggle Competition "COVID-19" Global forecasting(week-2),
                                    extracted and plotted country wise data from raw data of fatalities 
                                    around the globe using python3 and matplotlib 
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/senpinaki222/covid19_global">Github Link</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Row>

                <Row className="text-center">
                    <h1 className="text-center">Robotics</h1>
                </Row>

                <Row>
                    <CardGroup className="p-4">
                        <Card bg={'dark'} style={{ width: '18rem' }} className="p-2">
                            <Card.Img variant="top" src={image_4} />
                            <Card.Body>
                                <Card.Title>Smart RFID Door Lock</Card.Title>
                                <Card.Text>
                                    Smart RFID door lock using Arduino and NodeMCU
                                    operated using RFID tags or remotely with Smart Phone
                                </Card.Text>
                                <Button variant="primary" href="/projects">Link</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <CardGroup className="p-4">
                        <Card bg={'dark'} style={{ width: '18rem' }} className="p-2">
                            <Card.Img variant="top" src={image_10} />
                            <Card.Body>
                                <Card.Title>Virtual Model Simulation</Card.Title>
                                <Card.Text>
                                    virtually simulated control systems of models like inverted cart pendulum,
                                    mass-spring system, using Octave, as a part of E-Yantra Robotics Competiton, IITB
                                </Card.Text>
                                <Button variant="primary" href="/projects">Link</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <CardGroup className="p-4">
                        <Card bg={'dark'} style={{ width: '18rem' }} className="p-2">
                            <Card.Img variant="top" src={image_13} />
                            <Card.Body>
                                <Card.Title>Ping-Pong game on 16X2 LCD</Card.Title>
                                <Card.Text>
                                    Created a ping pong game on 16X2 LCD, using Arduino UNO and written the code on Arduino IDE
                                    , as a part of selection process of FOSSEE internship, 2019
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/senpinaki222/ping_pong_game">Github Link</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Row>

                <Row className="text-center">
                    <h1 className="text-center">Others</h1>
                </Row>

                <Row>
                    <CardGroup className="p-4">
                        <Card bg={'dark'} style={{ width: '18rem' }} className="p-2">
                            <Card.Img variant="top" src={image_11} />
                            <Card.Body>
                                <Card.Title>Terminal based Attandance management System</Card.Title>
                                <Card.Text>
                                    It's a terminal based personal attandance management system, created using python3 
                                    and SQL database in backend to keep track of regular attanadnce. Although it doesn't 
                                    have any attractive user interface but serves the basic need of maintaining 75%.
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/senpinaki222/personal_attendance_management_system">Github Link</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                    <CardGroup className="p-4">
                        <Card bg={'dark'} style={{ width: '18rem' }} className="p-2">
                            <Card.Img variant="top" src={image_12} />
                            <Card.Body>
                                <Card.Title>Automated Email sending script</Card.Title>
                                <Card.Text>
                                    Simple Python Script to send automated mail to huge number of users,
                                    with customized recipient name, specific sending time.
                                </Card.Text>
                                <Button variant="primary" href="https://github.com/senpinaki222/automated-Email-sending-model">Github Link</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Row>
            </Container>

        </Base>
    )
}



export default Projects;