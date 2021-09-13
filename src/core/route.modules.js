import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import AmountPage from '../components/AmountPage';
import PaymentMethod from '../components/PaymentMethod';

const routes =(
    <Switch>
    <Route component={AmountPage} exact path='amount' />
    <Route component={PaymentMethod} path='paymentMethod'/>
    </Switch>
);

export default routes;