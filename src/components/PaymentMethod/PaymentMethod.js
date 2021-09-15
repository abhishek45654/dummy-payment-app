import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import styles from './PaymentMethod.scss';
import credit from '../../images/credit-card-icon.jpg';
import debit from '../../images/ATM-Debit-Card.jpg';



const PaymentMethod = (props) => {
	console.log(props.match.params.amount)
	const history = useHistory();
	let Method ="";
	const creditCard = (e) => {
		Method = "credit";
		e.preventDefault();
		history.push("/paymentforms/credit/"+props.match.params.amount);
	}	
	const debitCard = (e) => {
		Method = "debit";
		e.preventDefault();
		history.push("/paymentforms/debit/"+props.match.params.amount);
		console.log(Method)
	}
	return (
		<div className="payMethod">
			<img src={credit} alt="credit" onClick={creditCard} />
			<img src={debit} alt="debit" onClick={debitCard}/>
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
