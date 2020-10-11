import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from './components/Weather';
import LoginHeader from './components/LoginHeader';
import LogoutHeader from './components/LogoutHeader';


function App() {

  const [loggedIn, etLoggedIn] = useState(false);

  return (
    <div className="bg">
      <div className="app-body">
        {!loggedIn && <LoginHeader setLoggedIn={etLoggedIn} />}
        {loggedIn && <LogoutHeader setLoggedIn={etLoggedIn} />}
        <br></br>
        <Weather />
      </div>
    </div>
  );
}

export default App;
