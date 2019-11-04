import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './App.css';
let PATH = 'http://localhost:6000';

let amount =0;


function App() {
	const handler = (e) => {
		amount = e.target.innerHTML;
		// console.log(e);
		console.log(amount);
		console.log(typeof amount);
	};

	const payment = (amount) => {
		console.log('entered payment function');

		return fetch(`${PATH}`, {
			method: 'POST',
			Accept: 'application/json',
			'Content-Type': 'application/json',
			        body: JSON.stringify(order)

		})
			.then((res) => res.text())
			.then((text) => (window.location.href = text))
			.catch((err) => {
				console.log(err);
			});
	};



const order = {
      purpose: "PAYTM Karo",
      amount: amount,
      buyer_name: 'mojitostore',
      email: 'mail@adijha.com',
      phone: '7821916952',
      address: 'You can find me near 172.27.1',
      user_id: "101",
   
      redirect_url: "http://localhost:6000/callback?user_id=1010",
      webhook_url: "/webhook/"
    };


	return (
		<Fragment>
			<h3>Select any plan</h3>

			<div className="mega">
				<div className="select-box">
					<div className="select-box__current" tabIndex={1}>
						<div className="select-box__value">
							<input
								className="select-box__input"
								type="radio"
								id={0}
								defaultValue={1}
								name="Ben"
								defaultChecked="checked"
							/>
							<p className="select-box__input-text">₹100 for 1000 SMS</p>
						</div>
						<div className="select-box__value">
							<input
								className="select-box__input"
								type="radio"
								id={1}
								defaultValue={2}
								name="Ben"
								defaultChecked="checked"
							/>
							<p className="select-box__input-text">₹200 for 2000 SMS</p>
						</div>
						<div className="select-box__value">
							<input
								className="select-box__input"
								type="radio"
								id={2}
								defaultValue={3}
								name="Ben"
								defaultChecked="checked"
							/>
							<p className="select-box__input-text">₹300 for 3000 SMS</p>
						</div>
						<div className="select-box__value">
							<input
								className="select-box__input"
								type="radio"
								id={3}
								defaultValue={4}
								name="Ben"
								defaultChecked="checked"
							/>
							<p className="select-box__input-text">₹400 for 4000 SMS</p>
						</div>
						<div className="select-box__value">
							<input
								className="select-box__input"
								type="radio"
								id={4}
								defaultValue={5}
								name="Ben"
								defaultChecked="checked"
							/>
							<p className="select-box__input-text">₹500 for 5000 SMS</p>
						</div>
						<img
							className="select-box__icon"
							src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
							alt="Arrow Icon"
							aria-hidden="true"
						/>
					</div>
					<ul className="select-box__list">
						<li>
							<label className="select-box__option" htmlFor={0} aria-hidden="aria-hidden" onClick={handler}>
								₹100 for 1000 SMS
							</label>
						</li>
						<li>
							<label className="select-box__option" onClick={handler} htmlFor={1} aria-hidden="aria-hidden">
								₹200 for 2000 SMS
							</label>
						</li>
						<li>
							<label className="select-box__option" htmlFor={2} onClick={handler} aria-hidden="aria-hidden">
								₹300 for 3000 SMS
							</label>
						</li>
						<li>
							<label onClick={handler} className="select-box__option" htmlFor={3} aria-hidden="aria-hidden">
								₹400 for 4000 SMS
							</label>
						</li>
						<li>
							<label className="select-box__option" htmlFor={4} aria-hidden="aria-hidden" onClick={handler}>
								₹500 for 5000 SMS
							</label>
						</li>
					</ul>
				</div>

				<button className="select-box rum-pum" style={{ textAlign: 'left' }} onClick={payment} style={{ height: '56px', width: 180, cursor: 'pointer' }}>
					Purchase
				</button>
			</div>
		</Fragment>
	);
}

export default App;
