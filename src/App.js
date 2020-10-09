import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BgImage from './assets/utah.jpg';
import './App.css';

import Weather from './components/Weather';
import WeatherHeader from './components/WeatherHeader';

function App() {
  return (
    <div className="bg">
      <div className="app-body">
        <WeatherHeader />
        <br></br>
        <Weather />
      </div>
    </div>
  );
}

export default App;
