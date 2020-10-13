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
    const [btValue, setBtValue] = useState(0);
    const api_url = `http://api.weatherapi.com/v1/current.json?key=c5bf03e83ad84e67a3610422201110&q==${cityName}`
    const getCityName = (e) => {
        setCityName(e.target.value); 
    }

    const submitCallback = (e) =>{
        e.preventDefault();
        console.log(`City name: ${cityName}`);
        setBtValue(preBtValue => preBtValue + 1);
        // setBtValue(true);
        console.log(btValue);
    }
    
    useEffect(() => {

        fetch(api_url)
        .then(res=>{
            if (res.ok) {     //to check respong is return 200-299(ok)
                res.json()
                .then(data =>{
                    console.log('Country: '+ data.location["country"] +', City: ' + data.location["name"])
                    console.log('Temp: '+ data.current["temp_c"] +'˚C, Condition: ' + data.current["condition"]["text"])
                })                
            } else {
                console.log("Not Successful")
            }
        })
        // .then(res => 
        //     res.json())
        // .then(data => {
        //     console.log(data)
        // })
        .catch(
            (err => {console.error(err)})
        )

    }, [btValue])
    
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
                            autoComplete="off" 
                            value={cityName}
                            onChange={getCityName}
                        />
                        <InputGroup.Append>
                            <Button variant="secondary" onClick={submitCallback}>Search</Button>
                        </InputGroup.Append>
                        <button onClick={submitCallback}>submit</button>
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