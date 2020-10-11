import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Wpic from "../assets/weather.svg";
import "../components/custom.css";
import { Container, Button } from 'react-bootstrap';

  

function LogoutHeader({setLoggedIn}){

const handleLogout=(event) =>{
    setLoggedIn(false);
}

return(
        <>
            <Navbar id="nav-bar" fixed="buttom" sticky="buttom">
                <Container>
                <Navbar.Brand id="nav-brand" href="#home">
                    <img
                    alt=""
                    src={Wpic}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Weather App
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button variant="secondary" onClick={handleLogout}>Logout</Button> 
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default LogoutHeader;