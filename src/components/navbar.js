import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap'
import SiteSearch from './search.js'

class TCDNav extends React.Component {
    constructor() {
        super();
        this.state = {
            pages: [{
                    id: 0,
                    name: "Home",
                    ref: "/Home"
                },
                {
                    id: 1,
                    name: "Exam Papers",
                    ref: "/Exam_Papers"
                },
                {
                    id: 2,
                    name: "Profile",
                    ref: "/Profile"
                }
            ]
        }
    }

    render() {
        return (
            <Navbar bg="dark" varient="dark" expand="lg">
                <Navbar.Brand style={{color: "white"}} href="#Home">TCD Exams</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className = "mr-auto">
                        <DropdownButton
                            title="Pages"
                            variant="outline-light">
                                {this.state.pages.map(page => {
                                    return <Dropdown.Item eventKey={page.id}>{page.name}</Dropdown.Item>
                                })}
                        </DropdownButton>
                    </Nav>
                    <SiteSearch></SiteSearch>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default TCDNav