import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import { Button, CardColumns, FormControl } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import weatherImage from '../assets/weather.svg';
import WeatherHistory from '../components/WeatherHistory';
import '../components/custom.css'

// const [cityWeather, setCityWeather] = useState(null);

// const WeatherHistory = () => {
//     return(
//         <div className="container">
//             <div className="row">
//                 <div className="col-6 col-md-4">
//                     <h5>Previous History</h5>
//                 </div>
//             </div>
//             <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
//                 <div className="col">
//                     <Card id="weather-card-history"  text="white" style={{ width: '13rem', height:'13rem' }}>
//                         {/* <Card.Header>Header</Card.Header> */}
//                         <Card.Body as="div">
//                             <Card.Title><h4>Light Card Title</h4></Card.Title>
//                             <Card.Text>
//                                 <p>09/10/2020 06:00GMT</p>
//                                 <img src={weatherImage} alt="" style={{width: 50, height:50}} />
//                                 <p>35-40C</p>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className="col">
//                     <Card id="weather-card-history"  text="white" style={{ width: '13rem', height:'13rem' }}>
//                         {/* <Card.Header>Header</Card.Header> */}
//                         <Card.Body as="div">
//                             <Card.Title><h4>Light Card Title</h4></Card.Title>
//                             <Card.Text>
//                                 <p>09/10/2020 06:00GMT</p>
//                                 <img src={weatherImage} alt="" style={{width: 50, height:50}} />
//                                 <p>35-40C</p>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className="col">
//                     <Card id="weather-card-history"  text="white" style={{ width: '13rem', height:'13rem' }}>
//                         {/* <Card.Header>Header</Card.Header> */}
//                         <Card.Body as="div">
//                             <Card.Title><h4>Light Card Title</h4></Card.Title>
//                             <Card.Text>
//                                 <p>09/10/2020 06:00GMT</p>
//                                 <img src={weatherImage} alt="" style={{width: 50, height:50}} />
//                                 <p>35-40C</p>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
                    
//                 </div>
//                 <div className="col">
//                     <Card id="weather-card-history"  text="white" style={{ width: '13rem', height:'13rem' }}>
//                         {/* <Card.Header>Header</Card.Header> */}
//                         <Card.Body as="div">
//                             <Card.Title><h4>Kumasi, Ghana</h4></Card.Title>
//                             <Card.Text>
//                                 <p>09/10/2020 06:00GMT</p>
//                                 <img src={weatherImage} alt="" style={{width: 50, height:50}} />
//                                 <p>35-40C</p>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className="col">
//                     <Card id="weather-card-history"  text="white" style={{ width: '13rem', height:'13rem' }}>
//                         {/* <Card.Header>Header</Card.Header> */}
//                         <Card.Body as="div">
//                             <Card.Title><h4>Kumasi, Ghana</h4></Card.Title>
//                             <Card.Text>
//                                 <p>09/10/2020 06:00GMT</p>
//                                 <img src={weatherImage} alt="" style={{width: 50, height:50}} />
//                                 <p>35-40C</p>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//                 <div className="col">
//                 <Card id="weather-card-history"  text="white" style={{ width: '13rem', height:'13rem' }}>
//                         {/* <Card.Header>Header</Card.Header> */}
//                         <Card.Body as="div">
//                             <Card.Title><h4>Kumasi, Ghana</h4></Card.Title>
//                             <Card.Text>
//                                 <p>09/10/2020 06:00GMT</p>
//                                 <img src={weatherImage} alt="" style={{width: 50, height:50}} />
//                                 <p>35-40C</p>
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </div>
//         </div>
//     );
// }


function Weather({setLoggined}) {

    return(
        // <Container>
        //     <div>
        //         <Row className="justify-content-md-center">
        //             <Col md="6">
        //                 <InputGroup className="mb-3">
        //                     <FormControl 
        //                         placeholder="City"
        //                         aria-label="City"
        //                         aria-describedby="basic-addon2"
        //                     />
        //                 <InputGroup.Append>
        //                     <Button variant="secondary">Search</Button>
        //                 </InputGroup.Append>
        //                 </InputGroup>
        //             </Col>
        //         </Row>
        //         <Row className="justify-content-md-center">
        //             {/* <Col></Col> */}
        //             <Col md="auto">
        //                 <Card id="weather-card"  text="white" style={{ width: '13rem', height:'13rem' }}>
        //                     {/* <Card.Header>Header</Card.Header> */}
        //                     <Card.Body as="div">
        //                     <Card.Title><h4>Light Card Title</h4></Card.Title>
        //                     <Card.Text>
        //                         Some quick example text to build on the card title and make up the bulk
        //                         of the card's content.Set the column value (for any breakpoint size) to 
        //                         "auto" to size columns based on the natural width of their content
        //                     </Card.Text>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //         </Row>
        //     </div>
            // <WeatherHistory />
        // </Container>
        <div className="container">
            {/* the search input filed */}
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <InputGroup className="mb-3">
                        <FormControl 
                            placeholder="City"
                            aria-label="City"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="secondary">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>
            {/* weather card of a city */}
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <Card id="weather-card"  text="white" style={{ width: '13rem', height:'13rem'}}>
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
            <br></br>
            <WeatherHistory />
        </div>
    );
    
}

export default Weather;