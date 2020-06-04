import React, {useEffect, useState} from 'react'
import "../styles.css"
import Base from "./Base"
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Media from 'react-bootstrap/Media'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import image_1 from "../images/image-1.jpeg"
import image_2 from "../images/image-2.png"
import image_3 from "../images/image-3.png"
import image_4 from "../images/image-4.jfif"
import image_6 from "../images/image-6.png"
import image_16 from "../images/image-16.jpg"
import image_17 from "../images/image-17.jpg"
import image_18 from "../images/image-18.jpg"
import image_19 from "../images/image-19.png"


const Home = () => {
    return (
        <Base title="Home" description="Welcome" className="bg-secondary text-white p-4" style="width: 100%">

            <Container>
                <Card className="bg-dark text-white">
                    <Card.Img src={image_6} alt="Card image" />
                    
                </Card>
            </Container>
            

            <Container className="text-center bg-secondary p-4">
                <Card className="text-center bg-secondary border-white">
                    <Card.Body>
                        <Card.Title className="font-weight-bold">About Me</Card.Title>
                        
                        <Card.Text>
                        Hi, I am Pinaki Sen.
                        I'm an B.tech student at NIT Agartala Electrical Engineering Department. 
                        I was born and raised in West Bengal, India.
                        </Card.Text>

                        <Card.Text >
                        I am a self taught Web Developer and love developing Machine Learning models too. 
                        I have also worked on Virtual Model Simulations. 
                        I like Competitive Coding, participating in Online Programming contest and Hackathons.
                        Besides I love to play with MicroController Boards like Arduino, NodeMcu etc.
                        </Card.Text>
                        
                    </Card.Body>
                    
                </Card>
            </Container>

            <Container className="text-center bg-secondary p-4">
                <Card className="text-center bg-secondary border-white">
                    <Card.Header className="font-weight-bold">What I do for you</Card.Header>
                    <Card.Body>
                        <Card.Title classname="font-weight-bold">Web Application Projects</Card.Title>

                        <Card.Text>
                        If you are an entrepreneur, need a Web Application to reach people on Internet and grow your business online, 
                        or you are a passionate photographer or a content-creator, need a Website to advertise your skills, 
                        I am here to make your personalized Website.
                        </Card.Text>

                        <Card.Text>
                        I take all kind of Web Development Projects. 
                        It might be simple HTML, Bootstrap or Complex E-commerce or Python Data Analysis.
                        </Card.Text>

                        <Card.Text>
                        You can reach me at this no. 86177 88985 or drop an E-mail at 
                        <a href="/contacts" class="text-white bg-dark"> pinakisen.eenita@gmail.com </a>
                        </Card.Text>
                        <Button variant="primary" href="/contacts">Contact Me</Button>
                    </Card.Body>
                    
                </Card>
            </Container>

            <Container className="text-center bg-scondary p-4">
                <Row className="text-center">
                    <h1 className="text-center">Projects</h1>
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
                            <Card.Img variant="top" src={image_4} />
                            <Card.Body>
                                <Card.Title>RFID door lock</Card.Title>
                                <Card.Text>
                                    Smart RFID door lock using Arduino and NodeMCU
                                    operated using RFID tags or remotely with Smart Phone
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                        
                    <Button variant="info" size="lg" block href="/projects">Show More</Button>
                </Row>
            </Container>

            <Container className="text-center bg-secondary p-4">
                <Row className="text-center">
                    <h1 className="text-center">Technical Skills</h1>
                </Row>
                <Row>
                    <div className="container p-2">
                        <Card className="text-center bg-secondary">
                            <Card.Header>Programming Skills</Card.Header>
                            <Card.Body>
                                <Card.Title>Web Application Development</Card.Title>
                                <Card.Text>
                                I am a self taught Full stack Web Developer, having knowledge and experince of
                                trending frameworks like MERN Stack, Django etc. I am skilled in Nodejs, Reactjs,
                                MongoDB, Express. 
                                </Card.Text>
                                

                                <div className="row p-2" />

                                <Card.Title>Machine Learning</Card.Title>
                                <Card.Text>
                                I love developing Machine Learning models to solve real life problems.
                                I mostly use Python3 libraries like Scikit-learn, numpy, pandas for ML model,
                                Keras for Deep learning and Matplotlib for Data Visualization.
                                </Card.Text>
                                
                                <div className="row p-2" />

                                <Card.Title>Programing Languages</Card.Title>
                                <Card.Text>
                                I am skilled in Programming Languages like C/C++, Python3, JavaScript.
                                I also have basic knowledge of MATLAB, Octave.
                                </Card.Text>
                                
                                <div className="row p-2" />

                                <Card.Title>Basic Computer Science knowledge</Card.Title>
                                <Card.Text>
                                I have knowledge of Object Oriented Programming and various Data Structures and Algorithms,
                                which is really necessary for Competitive Coding and Problem Solving Skills.
                                </Card.Text>
                                

                            </Card.Body>
                        </Card>
                        </div>

                        <div className="container p-2">
                        <Card className="text-center bg-secondary">
                            <Card.Header>Electrical Engineering knowledge</Card.Header>
                            <Card.Body>
                                <Card.Title>Theoretical knowledge</Card.Title>
                                <Card.Text>
                                Being a Bachelors student of Electrical Engg. I am skilled in
                                Electrical Network Analysis, Signal and Systems, Digital Electronics
                                </Card.Text>
                            
                                <div className="row p-2" />

                                <Card.Title>Practical knowledge</Card.Title>
                                <Card.Text>
                                I have knowledge of Model Simulation using MATLAB, Simulink. 
                                Besides I have worked with MicroControllers like Arduino, Raspberry-pi, NodeMCU etc.
                                </Card.Text>
                            
                            </Card.Body>
                            
                        </Card>
                    </div>
                    <Button variant="info" size="lg" block href="/skills">Details</Button>
                </Row>
            </Container>



            <Container className="text-center bg-secondary p-4">
                <h1 className="text-left">Experience</h1>
                <hr/>

                <Row>
                <h5 className="font-weight-bold text-left">Vice President - ANARC,Robotics Club, NIT Agartala</h5>
                </Row>

                <Row>
                <a href="http://anarc.in/?i=1" class="text-decoration-none text-white">[ Aug,2019 - present ]</a>
                </Row>

                <Row>
                        <p className="font-weight-light text-left">
                            => organized orientation programme of Robotics Club, SOAR 8.0; 
                            conducted workshop in campus in collaboration with Techkriti, IIT Kanpur and many more
                        </p>
                    </Row>
                    <Row>
                        <p className="font-weight-light text-left">
                            => was a part of oraganizing team Techfest, AAYAM 7.0
                        </p>
                    </Row>
            </Container>
            

            <Container className="text-center bg-scondary p-4">

                <Row>
                    <Col xs={0} sm={0} md={2} large={2} xl={2}>
                        
                    </Col>
                    <Col xs={12} sm={12} md={8} large={8} xl={8}>
                        <Image src={image_16} fluid />
                    </Col>
                </Row>
                
            </Container>


        </Base>
    )
}


export default Home;