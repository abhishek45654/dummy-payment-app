import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import styles from './AmountPage.scss'

const AmountPage = () => {
	const history = useHistory();
	const [state, setState] = useState('');
	const submit = (e) => {
		history.push("/paymentMethod/"+state);
	}
	return (
		<div>
			<form className="amount" onSubmit={submit}>
				<label>Amount : </label>
				<input type="number" name="amount"  placeholder="Enter the amount" id="input1" onChange={e=>setState(e.target.value)}/>
				<input type="submit" value="submit" style={{ backgroundColor: "rgb(124, 33, 124)", color: "white", marginLeft: "15px" }} />
			</form>
		</div>);
}


export default AmountPage;
