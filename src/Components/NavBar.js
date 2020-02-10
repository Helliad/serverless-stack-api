import React from 'react'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div `
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .navlink{
        colour: #bbb;

        &:hover {
            color: #fff;
        }
    }

    #basic-navbar-nav{
        float:right;
    }
`;

const NaviBar = () => {
    return (
        <Styles>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Talent Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="ml-auto " >
                        <Nav.Link href="https://talent-search.auth.us-east-1.amazoncognito.com/login?client_id=9r9vtuen9fuc7op1qbt2tr261&amp;response_type=code&amp;scope=phone+profile+email+openid&amp;redirect_uri=https://localhost:3000/"> <b>Login</b></Nav.Link>
                        <Nav.Link href="https://talent-search.auth.us-east-1.amazoncognito.com/signup?client_id=9r9vtuen9fuc7op1qbt2tr261&amp;response_type=code&amp;scope=phone+profile+email+openid&amp;redirect_uri=https://localhost:3000/">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}
/*
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */

export default NaviBar;