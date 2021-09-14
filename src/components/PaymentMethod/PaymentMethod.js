import React, {useState} from 'react';
import styles from './PaymentMethod.scss';
import credit from '../../images/credit-card-icon.jpg';
import debit from '../../images/ATM-Debit-Card.jpg';


const CreditCardForm = (props) => {
	const [creditState,setCreditState] = useState({
		amount: props.match.params.amount,
		cardNumber:"",
		cardExpiryDate:"",
		cardCVC: ""
	})
	return (
		<div>
			<h1>Amount: {props.match.params.amount}</h1>
			<form>
				<input type="text" name="cardNumber" onChange={e=>setCreditState(e.target.value.cardNumber)}/>
				<input type="text" name="cardExpiryDate" onChange={e=>setCreditState(e.target.value.cardExpiryDate)}/>
				<input type="text" name="cardCVC" onChange={e=>setCreditState(e.target.value.cardCVC)}/>
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
	return (
		<div>
			<h1>Amount: {props.match.params.amount}</h1>
			<form>
				<input type="text" name="cardNumber" onChange={e=>setDebitState(e.target.value.cardNumber)}/>
				<input type="text" name="cardExpiryDate" onChange={e=>setDebitState(e.target.value.cardExpiryDate)}/>
				<input type="text" name="cardCVV" onChange={e=>setDebitState(e.target.value.cardCVV)}/>
			</form>
		</div>
	);
}
const PaymentMethod = (props) => {
	console.log(props.match.params.amount)
	let method = "";
	const creditCard = () => {
		method = <CreditCardForm {...props}/>;
	}	
	const debitCard = () => {
		method = <DebitCardForm {...props}/>;
	}
	return (
		<div className="payMethod">
			<img src={credit} alt="credit" onClick={creditCard} />
			<img src={debit} alt="debit" onClick={debitCard}/>
			{method}
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
