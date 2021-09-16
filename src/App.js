import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import routes from './core/route.modules';


function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Payment Page</h1>
      </div>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
