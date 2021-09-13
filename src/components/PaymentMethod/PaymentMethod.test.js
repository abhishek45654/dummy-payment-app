import React from 'react';
import { shallow, render, mount } from 'enzyme';
import PaymentMethod from './PaymentMethod';

describe('PaymentMethod', () => {
  let props;
  let shallowPaymentMethod;
  let renderedPaymentMethod;
  let mountedPaymentMethod;

  const shallowTestComponent = () => {
    if (!shallowPaymentMethod) {
      shallowPaymentMethod = shallow(<PaymentMethod {...props} />);
    }
    return shallowPaymentMethod;
  };

  const renderTestComponent = () => {
    if (!renderedPaymentMethod) {
      renderedPaymentMethod = render(<PaymentMethod {...props} />);
    }
    return renderedPaymentMethod;
  };

  const mountTestComponent = () => {
    if (!mountedPaymentMethod) {
      mountedPaymentMethod = mount(<PaymentMethod {...props} />);
    }
    return mountedPaymentMethod;
  };  

  beforeEach(() => {
    props = {};
    shallowPaymentMethod = undefined;
    renderedPaymentMethod = undefined;
    mountedPaymentMethod = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
