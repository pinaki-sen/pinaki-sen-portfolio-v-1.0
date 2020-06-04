import React, {useEffect, useState} from 'react'
import "../styles.css"
import Base from "./Base"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'


import image_15 from "../images/image-15.png"



const Contacts = () => {
    return (

        <Base title="Projects" description="Welcome" className="bg-secondary text-white p-4">

            <Container>
                <Card className="bg-dark text-white">
                    <Card.Img src={image_15} alt="Card image" />
                    
                </Card>
            </Container>

            <Container className="text-center bg-secondary p-4" >
            
            <Card  className="text-center bg-dark border-white">
                <Card.Header className="font-weight-bold">Contact Details</Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>
                                <h6 className="font-weight-bold text-left">Email : </h6>
                                
                                <h6 className="font-weight-normal text-left">pinakisen.eenita@gmail.com</h6>
                                <h6 className="font-weight-normal text-left">senpinaki222@gmail.com</h6>
                                <h6 className="font-weight-normal text-left">pinaki.code@gmail.com</h6>
                                
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col >
                                <h6 className="font-weight-bold text-left">LinkedIn : </h6>
                            
                                <h6 className="text-left">
                                    <a href="https://www.linkedin.com/in/senpinaki222" class="text-white">linkedin.com/in/senpinaki222</a>
                                </h6>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                                <h6 className="font-weight-bold text-left">Phone : </h6>
                            
                                <h6 className="font-weight-normal text-left">86177 88985</h6>
                                <h6 className="font-weight-normal text-left">98745 26165</h6>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                                <h6 className="font-weight-bold text-left">Instagram : </h6>
                            
                                <h6 className="text-left">
                                    <a href="https://www.instagram.com/pinaki_sen_" class="text-white">instagram.com/pinaki_sen_</a>
                                </h6>
                                
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                                <h6 className="font-weight-bold text-left">Whatsapp : </h6>
                            
                                <h6 className="font-weight-normal text-left">86177 88985</h6>
                                
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
            
            </Container>


            <Container className="text-center bg-secondary p-4">
            
            <Card  className="text-center bg-dark border-white">
                <Card.Header className="font-weight-bold">Coding and Social Profiles</Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>
                                <h6 className="font-weight-bold text-left">Github : </h6>
                            
                                <h6 className="text-left">
                                    <a href="https://www.github.com/senpinaki222" class="text-white">github.com/senpinaki222</a>
                                </h6>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                                <h6 className="font-weight-bold text-left">Kaggle : </h6>
                            
                                <h6 className="text-left">
                                    <a href="https://www.kaggle.com/senpinaki222" class="text-white">kaggle.com/senpinaki222</a>
                                </h6>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                                <h6 className="font-weight-bold text-left">LinkedIn : </h6>
                            
                                <h6 className="text-left">
                                    <a href="https://www.linkedin.com/in/senpinaki222" class="text-white">linkedin.com/in/senpinaki222</a>
                                </h6>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                                <h6 className="font-weight-bold text-left">HackerEarth : </h6>
                            
                                <h6 className="text-left">
                                    <a href="https://www.hackerearth.com/@senpinaki222" class="text-white">hackerearth.com/@senpinaki222</a>
                                </h6>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                                <h6 className="font-weight-bold text-left">HackerRank : </h6>
                            
                                <h6 className="text-left">
                                    <a href="https://www.hackerrank.com/senpinaki222" class="text-white">hackerrank.com/senpinaki222</a>
                                </h6>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                                <h6 className="font-weight-bold text-left">InterviewBit : </h6>
                            
                                <h6 className="text-left">
                                    <a href="https://www.interviewbit.com/profile/pinaki_sen" class="text-white">interviewbit.com/profile/pinaki_sen</a>
                                </h6>
                            </Col>
                        </Row>
                        
                        
                    </Container>
                </Card.Body>
            </Card>
            
            </Container>


            <Container className="text-center bg-secondary p-4">
            
            <Card  className="text-center bg-dark border-white">
                <Card.Header className="font-weight-bold">Others</Card.Header>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>
                                <h6 className="font-weight-bold text-left">Pexels : </h6>
                            
                                <h6 className="text-left">
                                    <a href="https://www.pexels.com/@pinaki-sen-2760899" class="text-white">pexels.com/@pinaki-sen-2760899</a>
                                </h6>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>
                                <h6 className="font-weight-bold text-left">Twitter : </h6>
                            
                                <h6 className="text-left">
                                    <a href="https://www.twitter.com/pinaki_sen_" class="text-white">twitter.com/pinaki_sen_</a>
                                </h6>
                            </Col>
                        </Row>

                        
                    </Container>
                </Card.Body>
            </Card>
        
            </Container>





        </Base>
    )
}


export default Contacts;