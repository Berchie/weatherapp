import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from './components/Weather';
import LoginHeader from './components/LoginHeader';
import LogoutHeader from './components/LogoutHeader';
import WeatherHistory from './components/WeatherHistory';
// import { CurrentPosition } from './components/search';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [count, setCount] = useState(1);
 

  return (
    <div className="bg">
      <div className="app-body">
        {!loggedIn && <LoginHeader setLoggedIn={setLoggedIn} />}
        {loggedIn && <LogoutHeader setLoggedIn={setLoggedIn} />}
        <br></br>
        {/* <CurrentPosition /> */}
        <Weather setCount={setCount} />
        {loggedIn && <WeatherHistory count={count} />}
      </div>
    </div>
  );
}

export default App;
