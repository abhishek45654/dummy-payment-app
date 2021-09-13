import React from 'react';
import styles from './PaymentMethod.scss';

const PaymentMethod = props => (
	<div>
		<h1 style={{marginTop:"50%"}}>redirected to payment method page</h1>
	</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class PaymentMethod extends React.Component {
//   render() {
//     return <div>This is a component called PaymentMethod.</div>;
//   }
// }

const PaymentMethodPropTypes = {
	// always use prop types!
};

PaymentMethod.propTypes = PaymentMethodPropTypes;

export default PaymentMethod;
