import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import AmountPage from '../components/AmountPage';
import PaymentForms from '../components/PaymentForms/PaymentForms';
import PaymentMethod from '../components/PaymentMethod';

const routes =(
    <Switch>
    <Route component={AmountPage} exact path='/' />
    <Route component={PaymentForms} path='/paymentmethod/:amount/:type'/>
    </Switch>
);

export default routes;