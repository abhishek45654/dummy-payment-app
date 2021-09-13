import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import AmountPage from '../components/AmountPage';
import PaymentMethod from '../components/PaymentMethod';

export default(
    <Switch>
    <Route component={AmountPage} exact path='/' />
    <Route component={PaymentMethod} path='paymentMethod'/>
    </Switch>
);