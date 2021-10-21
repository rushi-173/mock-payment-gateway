import "./UserForm.css";
import gokwik from "./../../assets/gokwik-o.png";
import mamaearth from "./../../assets/mamaearth.png";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export function UserForm() {
	const navigate = useNavigate();
	const { state } = useLocation();
	const [isLoading, setIsLoading] = useState(false);
	const option = state?.option;
	useEffect(() => {
		if (option === null || option === undefined) {
			navigate("/upi");
		}
	}, [navigate, option]);

	async function payUsingUPI(e) {
		e.preventDefault();
		try {
			setIsLoading(true);
			const res = await axios.get(
				`https://appt-backend.rushi173.repl.co/${option}`
			);
			console.log(res);

			setIsLoading(false);
			if (res.data.data) {
				navigate("/success");
			}
		} catch (err) {
			setIsLoading(false);
			console.log("Some error occurred! Try again.");
		}
	}

	return (
		<div className="COD">
			{isLoading && (
				<div className="loader-container">
					<Loader type="TailSpin" color="#eeca47" height={50} width={50} />
				</div>
			)}
			<div className="brand-container">
				<FaLongArrowAltLeft
					size="1.5rem"
					onClick={() => {
						navigate("/upi");
					}}
				/>
				<img src={mamaearth} alt="brand-icon" className="brand-icon" />
			</div>
			<form className="details-form">
				<label>Name</label>
				<input type="text" placeholder="Enter name" />
				<label>Email</label>
				<input type="email" placeholder="Enter email" />
				<label>Subject</label>
				<input type="text" placeholder="Enter subject" />
				<label>Message</label>
				<textarea placeholder="Enter message" />
				<button type="submit" onClick={payUsingUPI}>
					Submit
					<FaLongArrowAltRight />
				</button>
			</form>
			<div className="branding-container">
				<p className="text-brand-desc">Powered By</p>
				<img src={gokwik} alt="gokwik-logo" className="gk-logo-icon" />
			</div>
		</div>
	);
}
