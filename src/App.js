import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import routes from './core/route.modules';
import jiologo from './images/jio.png'
import login from './images/login.jpeg'


function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={jiologo} alt="logo"/>
        <h1>Payment Page</h1>
        <img src={login} alt="login"/>
      </div>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
