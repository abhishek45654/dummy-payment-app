import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AmountPage from './components/AmountPage/AmountPage';
import PaymentMethod from './components/PaymentMethod/PaymentMethod'


function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Payment Page</h1>
      </div>
      <BrowserRouter>
        <Switch>
          <Route component={AmountPage} exact path='/' />
          <Route component={PaymentMethod} path='/paymentMethod/:amount' />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
