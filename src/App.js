import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import routeModule from './core/route.modules'
function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Payment Page</h1>
      </div>
      <BrowserRouter>
        {routeModule}
      </BrowserRouter>
    </div>
  );
}

export default App;
