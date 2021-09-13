import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import styles from './AmountPage.scss'

const AmountPage = () => {
	const history = useHistory();
	const submit = () => {
		history.push("/paymentMethod");
		
	}
	return (
		<div>
			<form className="amount" onSubmit={submit}>
				<label>Amount : </label>
				<input type="number" name="amount" placeholder="Enter the amount" id="input1" />
				<input type="submit" value="submit" style={{ backgroundColor: "rgb(124, 33, 124)", color: "white", marginLeft: "15px" }} />
			</form>
		</div>);
}


export default AmountPage;
