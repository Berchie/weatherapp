import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup'
import { Button, FormControl } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'
import '../components/custom.css'
import WeatherHistory from './WeatherHistory';
import { propTypes } from 'react-bootstrap/esm/Image';



function Weather({setCount}) {

    const [history, setHistory] = useState([]);
    const [historyCheck, setHistoryCheck] = useState("nskdjsaw");
    const [cityName, setCityName] = useState("Kumasi");
    const [btValue, setBtValue] = useState("wn67d959q");
    const [cityWeather, setCityWeather] = useState(null);
    const api_url = `http://api.weatherapi.com/v1/current.json?key=c5bf03e83ad84e67a3610422201110&q==${cityName}`
    
    const getCityName = (e) => {
        setCityName(e.target.value); 
    }

    const submitCallback = (e) =>{
        e.preventDefault();
        console.log(`City name: ${cityName}`);
        setBtValue(Math.random().toString(36).substr(2, 9));
        setHistoryCheck(Math.random().toString(36).substr(2, 9))
        console.log(btValue);
    }
    
    useEffect(() => {

        fetch(api_url)
        .then(res=>{
            if (res.ok) {     //to check respong is return 200-299(ok)
                res.json()
                .then(data => {
                    setCityWeather(data);
                    // console.log(cityWeather);
                    console.log('Country: '+ data.location["country"] +', City: ' + data.location["name"])
                })                
            } else {
                console.log("Not Successful")
            }
        })
        .catch(
            (err => {console.error(err)})
        )

    }, [btValue])

    const historyData = () =>{
        if (cityWeather !== null) {

            const newHistory= {
                id: Math.random().toString(36).substr(2, 9),
                name: cityWeather.location["name"],
                country: cityWeather.location["country"],
                localtime:  cityWeather.location["localtime"],
                icon: cityWeather.current["condition"]["icon"],
                temp: cityWeather.current["temp_c"],
                description: cityWeather.current["condition"]["text"],
            }
            setHistory([...history, newHistory]);
        }
    };

   useEffect(() => {
       historyData()
       
   }, [cityWeather])

    useEffect(() =>{
            const json = JSON.stringify(history);
            localStorage.setItem("history", json);
            setCount(preCount => preCount + 1);
    }, [history]);

    
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
                    </InputGroup>
                </div>
            </div>

            {/* weather card of a city */}
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    {cityWeather === null 
                     ?
                     <Spinner animation="grow" variant="info" />
                     :
                     <Card id="weather-card"  text="white" style={{ width: '13rem', height:'13rem'}}>
                        {/* <Card.Header>Header</Card.Header> */}
                        
                        <Card.Body as="div">

                            <Card.Title> <h6>{cityWeather.location["name"]}, {cityWeather.location["country"]}</h6> </Card.Title>
                            <Card.Text>
                                <p>{cityWeather.location["localtime"]}</p>
                                <img src={cityWeather.current["condition"]["icon"]} alt="weather-condition-icon" />
                                <strong style={{fontSize:25}}>{cityWeather.current["temp_c"]}<span style={{fontSize:25}}>&#8451;</span></strong>
                                 <p style={{fontWeight: "normal", fontSize:15}}>{cityWeather.current["condition"]["text"]}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>}
                </div>
            </div>
           
        </div>
    );
    
}

export default Weather;