import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './PaymentForms.scss';


const CreditCardForm = (props) => {
	const [creditState,setCreditState] = useState({
		amount: props.match.params.amount,
		cardNumber:"",
		cardExpiryDate:"",
		cardCVC: ""
	})
	const handleChange = (event) => {
		setCreditState({...creditState,[event.target.name]:event.target.value});
	}
	const submit = (e) => {
		e.preventDefault();
		console.log(creditState);
	}
	return (
		<div className="methodForm">
			<h1>Amount : {props.match.params.amount}</h1>
			<form onSubmit={submit} className="form">
				<label><h1>Card Number :</h1>
				<input type="text" name="cardNumber" placeholder="Enter the card number" onChange={handleChange}/>
				<h1>Card Expiry Date :</h1>
				<input type="text" name="cardExpiryDate" placeholder="Enter the expiry date" onChange={handleChange}/>
				<h1>Card CVV :</h1>
				<input type="text" name="cardCVC" placeholder="Enter the CVV" onChange={handleChange}/></label>
				<input type="submit" style={{ backgroundColor: "rgb(124, 33, 124)", color: "white", marginLeft: "15px" }}/>
			</form>
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
		<div className="methodForm">
			<h1>Amount : {props.match.params.amount}</h1>
			<form onSubmit={submit} className="form">
				<label><h1>Card Number :</h1>
				<input type="text" name="cardNumber" placeholder="Enter the card number" onChange={handleChange}/>
				<h1>Card Expiry Date :</h1>
				<input type="text" name="cardExpiryDate" placeholder="Enter the expiry date" onChange={handleChange}/>
				<h1>Card CVV :</h1>
				<input type="text" name="cardCVV" placeholder="Enter the CVV" onChange={handleChange }/></label>
				<input type="submit" style={{ backgroundColor: "rgb(124, 33, 124)", color: "white", marginLeft: "15px" }}/>
			</form>
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
