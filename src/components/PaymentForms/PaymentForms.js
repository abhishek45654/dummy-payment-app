import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './PaymentForms.scss';
import PaymentMethod from '../PaymentMethod';


const CreditCardForm = (props) => {
	const [creditState,setCreditState] = useState({
		amount: props.match.params.amount,
		cardNumber:"",
		cardExpiryDate:"",
		cardCVV: ""
	})
	const handleChange = (event) => {
		setCreditState({...creditState,[event.target.name]:event.target.value});
	}
	const submit = (e) => {
		e.preventDefault();
		console.log(creditState);
	}
	return (
		<div className="wrapper">
			<PaymentMethod />
			<div className="methodForm">
				<h1>Credit Card Details</h1>
				<form onSubmit={submit} className="form">
					<input type="text" name="cardNumber" placeholder="Credit Card Number" onChange={handleChange} />
					<input type="text" name="cardExpiryDate" placeholder="MM/YY" onChange={handleChange} />
					<input type="text" name="cardCVV" placeholder="CVV" onChange={handleChange} />
					<input type="submit" style={{width:"35%",marginTop:"15px",marginBottom:"15px",position:"revert" }} />
				</form>
			</div>
			<div className="details">
				<ul><h1>Amount : {props.match.params.amount}</h1></ul>
				<ul><h1>Product Details :</h1></ul>
			</div>
		</div>
	);
}
const DebitCardForm = (props) => {
	const [debitState,setDebitState] = useState({
		amount: props.match.params.amount,
		cardNumber:"",
		cardExpiryDate:"",
		cardCVV: ""
	})
	const handleChange = (event) => {
		setDebitState({...debitState,[event.target.name]:event.target.value});
	}
	const submit = (e) => {
		e.preventDefault();
		console.log(debitState);
	}
	return (
		<div className="wrapper">
			<PaymentMethod />
			<div className="methodForm">
				<h1>Debit Card Details</h1>
				<form onSubmit={submit} className="form">
					<input type="text" name="cardNumber" placeholder="Debit Card Number" onChange={handleChange} />
					<input type="text" name="cardExpiryDate" placeholder="MM/YY" onChange={handleChange} />
					<input type="text" name="cardCVV" placeholder="CVV" onChange={handleChange} />
					<input type="submit" style={{width:"35%",marginTop:"15px",marginBottom:"15px",position:"revert" }} />
				</form>
			</div>
			<div className="details">
				<ul><h1>Amount : {props.match.params.amount}</h1></ul>
				<ul><h1>Product Details :</h1></ul>
			</div>
		</div>
	);
}

const PaymentForms = props => {
	console.log(props.match.params);
	if(props.match.params.type === "credit") {
		return <CreditCardForm {...props}/>
	}
	else if(props.match.params.type === "debit") {
		return <DebitCardForm {...props}/>
	}
	else return <div></div>
};

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class PaymentForms extends React.Component {
//   render() {
//     return <div>This is a component called PaymentForms.</div>;
//   }
// }

const PaymentFormsPropTypes = {
	// always use prop types!
};

PaymentForms.propTypes = PaymentFormsPropTypes;

export default PaymentForms;
