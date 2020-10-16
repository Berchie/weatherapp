import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import weatherImage from '../assets/weather.svg';
import '../components/custom.css';

function WeatherHistory({count}){

    const [hData, sethData] = useState(JSON.parse(localStorage.getItem("history")));

    useEffect(()=>{
        sethData(JSON.parse(localStorage.getItem("history")));
    }, [count]);

    return(
        <div className="container">
            <div className="row">
                <div className="col-6 col-md-4">
                    <h5>Search History</h5>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {hData !== null
                    ?
                     hData.map((hist) =>(
                        <div className="col" key={hist.id}>
                            <Card id="weather-card-history"  text="white" style={{ width: '13rem', height:'13rem' }}>
                            {/* <Card.Header>Header</Card.Header> */}
                                <Card.Body as="div">
                                    <Card.Title><h6>{hist.name}, {hist.country}</h6></Card.Title>
                                    <Card.Text>
                                        <p>{hist.localtime}</p>
                                        <img src={hist.icon} alt="weather-condition-icon" />
                                        <strong style={{fontSize:25}}>{hist.temp}<span style={{fontSize:25}}>&#8451;</span></strong>
                                        <p style={{fontWeight: "normal", fontSize:15}}>{hist.description}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                    : 
                    null}
            </div>
        </div>
    );
}

export default WeatherHistory;