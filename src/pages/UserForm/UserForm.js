import "./UserForm.css";
import gokwik from "./../../assets/gokwik-o.png";
import mamaearth from "./../../assets/mamaearth.png";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export function UserForm() {
	return (
		<div className="OrderSuccess">
			<div className="brand-container">
				<FaLongArrowAltLeft size="1.5rem" />
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
				<button type="submit">
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
