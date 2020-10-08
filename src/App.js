import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import './App.css';
import pic from "./assets/weather.svg";

function App() {
  return (
    <div className="bg">
      <div className="App-header">
      <Navbar sticky="top">
        <Navbar.Brand href="#home">
          <img
          alt=""
          src={pic}
          width="30"
          height="30"
          className="d-inline-block align-top"
          />{' '}
          Weather App
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text variant="light">
              <a href="#login">Login</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
        </div>
    </div>
  );
}

export default App;
