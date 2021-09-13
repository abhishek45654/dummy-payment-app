import React from 'react';
import { shallow, render, mount } from 'enzyme';
import AmountPage from './AmountPage';

describe('AmountPage', () => {
  let props;
  let shallowAmountPage;
  let renderedAmountPage;
  let mountedAmountPage;

  const shallowTestComponent = () => {
    if (!shallowAmountPage) {
      shallowAmountPage = shallow(<AmountPage {...props} />);
    }
    return shallowAmountPage;
  };

  const renderTestComponent = () => {
    if (!renderedAmountPage) {
      renderedAmountPage = render(<AmountPage {...props} />);
    }
    return renderedAmountPage;
  };

  const mountTestComponent = () => {
    if (!mountedAmountPage) {
      mountedAmountPage = mount(<AmountPage {...props} />);
    }
    return mountedAmountPage;
  };  

  beforeEach(() => {
    props = {};
    shallowAmountPage = undefined;
    renderedAmountPage = undefined;
    mountedAmountPage = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
