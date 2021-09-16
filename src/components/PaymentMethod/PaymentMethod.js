import React from 'react';
import {Link, useParams } from 'react-router-dom';
import styles from './PaymentMethod.scss';


const PaymentMethod = (props) => {
	let {amount} = useParams();
	return (
		<div className="payMethod">
			<div className="list">
				<ul><Link to={"/paymentmethod/" + amount + "/credit"} className="link">Credit Card</Link></ul>
				<ul><Link to={"/paymentmethod/" + amount + "/debit"} className="link">Debit Card</Link></ul>
			</div>
		</div>);
}

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
