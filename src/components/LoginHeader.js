import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Wpic from "../assets/weather.svg";
import "../components/custom.css";
import { Container, Button, Form, FormControl, FormGroup } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import UserAccount from '../data/userAccounts.json'; 
  

function LoginHeader({setLoggedIn}){

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


//email input event handle
const handleEmail = (event) => {
    setEmail(event.target.value);
}

//password input event handle
const handlePassword = (event) => {
    setPassword(event.target.value);
}


//login event handlder
const LoginButton = (event) => {
    event.preventDefault();

//    const logined = UserAccount.map((user)=>{
//        var usern = user.username;
//        var userp = user.password;
//         if (user.username === email && user.password === password){
//             // return alert(usern + ' '+ userp);
//             return true;
//         }

//    })

//    alert(logined)
//    setLoggedIn(logined);

   const logginedIn = UserAccount.filter(user => user.username === email);
//    if (logginedIn[0].username === email && logginedIn[0].password === password){
//         setLoggedIn(true);
//     }

    logginedIn.map(login =>  {if (login.username === email && login.password === password){
         setLoggedIn(true)
    }},)
//    alert(JSON.stringify(logginedIn));
//    const vn = logginedIn[0].username;
//    alert(vn);
   
}


const popover = (
        <Popover id="popover-secondary" className="popover-dg">
        {/* <Popover.Title as="h3">Popover right</Popover.Title> */}
        <Popover.Content>
            <div>
            <Form>
                <FormGroup controlId="formUsername">
                    <FormControl type="text"  placeholder="Username" onChange={handleEmail} />
                </FormGroup>
                <FormGroup controlId="formPassword">
                    <FormControl type="password" value={password} placeholder="Password" onChange={handlePassword} />
                </FormGroup>
                {/* <Button id="login-button" variant="primary" onClick={LoginButton} style={{width:100}}>Login</Button> */}
                {/* <input className="form-input" type="text" value={email} placeholder="Username" onChange={handleEmail} />
                <input className="form-input" type="password"  value={password} placeholder="Password" onChange={handlePassword} /> */}
                {/* <br></br> */}
                <Button id="login-button" variant="primary" onClick={LoginButton}>Login</Button>
            </Form>
            </div>
        </Popover.Content>
        </Popover>
    );

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

export default LoginHeader;