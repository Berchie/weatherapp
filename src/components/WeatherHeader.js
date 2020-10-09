import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Wpic from "../assets/weather.svg";
import "../components/custom.css";
import { Container, Button, Form, FormControl, FormGroup } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


const popover = (
    <Popover id="popover-secondary" className="popover-dg">
      {/* <Popover.Title as="h3">Popover right</Popover.Title> */}
      <Popover.Content>
        <Form>
            <FormGroup controlId="formUsername">
                <FormControl type="text" placeholder="Username" />
            </FormGroup>
            <FormGroup controlId="formPassword">
                <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <Button id="login-button" variant="primary" type="submit" style={{width:100}}>Login</Button>
        </Form>
      </Popover.Content>
    </Popover>
);
  

function WeatherHeader(){
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
                {/* <Navbar.Text variant="light">
                    <a href="#login">Login</a>
                </Navbar.Text> */}
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <Button variant="secondary">Login</Button>
                </OverlayTrigger>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default WeatherHeader;