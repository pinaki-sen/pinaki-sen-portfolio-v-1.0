import React from 'react'
import Menu from "./Menu"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../styles.css"



const Base = ({
    title= "My Title",
    description= "My Description",
    className= "bg-dark text-white p-4",
    children
}) => (
        <div>

            <Menu />

            
            

            

            <Container>
                
                <div className={className}>
                    {children}
                </div>
            </Container>

            <footer className="footer bg-dark mt-auto py-3">
                <div className="container-fluid bg-secondary text-white text-center py-3">
                    <h4>If you got any question, feel free to reach out</h4>
                    <Button className="btn btn-priary btn-lg" href="/contacts">Contact</Button>
                </div>
                <div className="container">
                    <span className="text-muted">
                        All Rights Reserved <span className="text-white">PINAKI SEN</span>
                    </span>
                </div>
            </footer>
        </div>
)


export default Base;