import React from 'react';
import { shallow, render, mount } from 'enzyme';
import PaymentForms from './PaymentForms';

describe('PaymentForms', () => {
  let props;
  let shallowPaymentForms;
  let renderedPaymentForms;
  let mountedPaymentForms;

  const shallowTestComponent = () => {
    if (!shallowPaymentForms) {
      shallowPaymentForms = shallow(<PaymentForms {...props} />);
    }
    return shallowPaymentForms;
  };

  const renderTestComponent = () => {
    if (!renderedPaymentForms) {
      renderedPaymentForms = render(<PaymentForms {...props} />);
    }
    return renderedPaymentForms;
  };

  const mountTestComponent = () => {
    if (!mountedPaymentForms) {
      mountedPaymentForms = mount(<PaymentForms {...props} />);
    }
    return mountedPaymentForms;
  };  

  beforeEach(() => {
    props = {};
    shallowPaymentForms = undefined;
    renderedPaymentForms = undefined;
    mountedPaymentForms = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
