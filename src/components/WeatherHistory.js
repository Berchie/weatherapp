import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import weatherImage from '../assets/weather.svg';
import '../components/custom.css';

function WeatherHistory({setLoggined}){
    return(
        <div className="container">
            <div className="row">
                <div className="col-6 col-md-4">
                    <h5>Previous History</h5>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                <div className="col">
                    <Card id="weather-card-history"  text="white" style={{ width: '13rem', height:'13rem' }}>
                        {/* <Card.Header>Header</Card.Header> */}
                        <Card.Body as="div">
                            <Card.Title><h4>Light Card Title</h4></Card.Title>
                            <Card.Text>
                                <p>09/10/2020 06:00GMT</p>
                                <img src={weatherImage} alt="" style={{width: 50, height:50}} />
                                <p>35-40C</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card id="weather-card-history"  text="white" style={{ width: '13rem', height:'13rem' }}>
                        {/* <Card.Header>Header</Card.Header> */}
                        <Card.Body as="div">
                            <Card.Title><h4>Light Card Title</h4></Card.Title>
                            <Card.Text>
                                <p>09/10/2020 06:00GMT</p>
                                <img src={weatherImage} alt="" style={{width: 50, height:50}} />
                                <p>35-40C</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card id="weather-card-history"  text="white" style={{ width: '13rem', height:'13rem' }}>
                        {/* <Card.Header>Header</Card.Header> */}
                        <Card.Body as="div">
                            <Card.Title><h4>Light Card Title</h4></Card.Title>
                            <Card.Text>
                                <p>09/10/2020 06:00GMT</p>
                                <img src={weatherImage} alt="" style={{width: 50, height:50}} />
                                <p>35-40C</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    
                </div>
                <div className="col">
                    <Card id="weather-card-history"  text="white" style={{ width: '13rem', height:'13rem' }}>
                        {/* <Card.Header>Header</Card.Header> */}
                        <Card.Body as="div">
                            <Card.Title><h4>Kumasi, Ghana</h4></Card.Title>
                            <Card.Text>
                                <p>09/10/2020 06:00GMT</p>
                                <img src={weatherImage} alt="" style={{width: 50, height:50}} />
                                <p>35-40C</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card id="weather-card-history"  text="white" style={{ width: '13rem', height:'13rem' }}>
                        {/* <Card.Header>Header</Card.Header> */}
                        <Card.Body as="div">
                            <Card.Title><h4>Kumasi, Ghana</h4></Card.Title>
                            <Card.Text>
                                <p>09/10/2020 06:00GMT</p>
                                <img src={weatherImage} alt="" style={{width: 50, height:50}} />
                                <p>35-40C</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                <Card id="weather-card-history"  text="white" style={{ width: '13rem', height:'13rem' }}>
                        {/* <Card.Header>Header</Card.Header> */}
                        <Card.Body as="div">
                            <Card.Title><h4>Kumasi, Ghana</h4></Card.Title>
                            <Card.Text>
                                <p>09/10/2020 06:00GMT</p>
                                <img src={weatherImage} alt="" style={{width: 50, height:50}} />
                                <p>35-40C</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default WeatherHistory;