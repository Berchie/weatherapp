import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.ccs';
import {usePosition} from 'use-position';

export const CurrentPosition = () =>{
    const watch =true;
    const{
    latitude,
    longitude,
    error,
    } = usePosition(watch);

    
    const [lat, setLat] = useState(0);
    const  [lon, setLon] = useState(0);

    const getLatLon = (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude)

        console.log("latitude is ", lat);
        console.log("Longitude is ", lon);
    }
    navigator.geolocation.getCurrentPosition((position)=>{
        setLat(prevlat => prevlat = position.coords.latitude);
        setLon(position.coords.longitude);
        console.log("Latitude is ", lat)
        console.log("Longitude is ", lon);
    });

    // console.log("latitude: "+ {latitude});
    // console.log("longitude: " + {longitude});
    // console.log("error: "+ {error});

    return(
        <code>
            latitude: {latitude}<br/>
            longitude: {longitude}<br/>
            {/* timestamp: {timestamp}<br/>
            accuracy: {accuracy && `${accuracy}m`}<br/> */}
            error: {error}
        </code>
    );
    
}