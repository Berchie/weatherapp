import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import { Button, FormControl } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import weatherImage from '../assets/weather.svg';
import WeatherHistory from '../components/WeatherHistory';
import '../components/custom.css'


function Weather({setLoggined}) {

    const [cityName, setCityName] = useState('Kumasi');
// const [btValue, setBtnValue] = useState(0);

    const getCityName = (e) => {
        setCityName(e.target.value);  
        console.log(cityName);  
    }

    const submitCallback = (e) =>{
        e.preventDefault();
        console.log(`City name: ${cityName}`);
    }
    
    return(

        <div className="container">
            {/* the search input filed */}
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="City"
                            aria-label="City"
                            aria-describedby="basic-addon2"
                            autocomplete="off" 
                            value={cityName}
                            onChange={getCityName}
                        />
                        <InputGroup.Append>
                            <Button variant="secondary" onClick={submitCallback}>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>
            {/* weather card of a city */}
            {/* {loading
            ?
            <p>loading...</p>
            : */}
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <Card id="weather-card"  text="white" style={{ width: '13rem', height:'13rem'}}>
                        {/* <Card.Header>Header</Card.Header> */}
                        <Card.Body as="div">
                            <Card.Title> <h4>, </h4> </Card.Title>
                            <Card.Text>
                                <p>09/10/2020 06:00GMT</p>
                                <img src={weatherImage} alt="" style={{width: 50, height:50}} />
                                 <p>35-40C</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            {/* } */}
            <br></br>
            <WeatherHistory />
        </div>
    );
    
}

export default Weather;