import React, {Fragment} from 'react'
import { Link, withRouter } from "react-router-dom"
import Dropdown from 'react-bootstrap/DropdownButton'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return {color: "#2ecc72"}
    }
    else{
        return {color: "#FFFFFF"}
    }
}

const Menu = ({history}) => (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">PINAKI SEN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            
            </Nav>
            
        </Navbar.Collapse>
        </Navbar>
        <hr/>
        <hr/>
    </div>
)

export default withRouter(Menu);