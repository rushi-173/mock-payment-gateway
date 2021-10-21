import "./UPI.css";
import mamaearth from "./../../assets/mamaearth.png";
import paytm from "./../../assets/paytm.png";
import phonepay from "./../../assets/phonepay.png";
import gpay from "./../../assets/gpay.jpg";
import bhimpay from "./../../assets/bhim.png";
import gokwikIcon from "./../../assets/gokwik-icon-dark.png";
import gokwik from "./../../assets/gokwik.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { getDeviceType, validateMobile } from "../../utils";
import Loader from "react-loader-spinner";
import { useState } from "react";
import { orderData, userData } from "../../config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function UPI() {
	const userDevice = getDeviceType();
	const user = userData ? userData : null;
	const order = orderData;
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [phoneNumber, setPhoneNumber] = useState(
		user && user.phoneNumber ? user.phoneNumber.toString() : ""
	);
	async function payUsingUPI(option) {
		if (!user) {
			navigate("/details", { state: { option } });
		} else {
			try {
				setIsLoading(true);
				const res = await axios.get(
					`https://appt-backend.rushi173.repl.co/${option}`
				);
				console.log(res);
				if (res.data.data) {
					navigate("/success");
				}
				setIsLoading(false);
			} catch (err) {
				setIsLoading(false);
				console.log("Some error occurred! Try again.");
			}
		}
	}
	async function getPaymentLink() {
		if (!validateMobile(phoneNumber)) {
			alert("enter valid phone number.");
			return;
		}
		try {
			setIsLoading(true);
			const res = await axios.post(
				`https://appt-backend.rushi173.repl.co/send`,
				{
					amount: order.amount,
					phoneNumber,
				}
			);
			console.log(res);

			setIsLoading(false);
			if (res.data.data) {
				if (user) {
					navigate("/success");
				}
			}
		} catch (err) {
			setIsLoading(false);
			console.log("Some error occurred! Try again.");
		}
	}
	return (
		<div className="Payment">
			{isLoading && (
				<div className="loader-container">
					<Loader type="TailSpin" color="#eeca47" height={50} width={50} />
				</div>
			)}

			<div className="brand-container">
				<FaLongArrowAltLeft
					size="1.5rem"
					onClick={() => {
						navigate("/");
					}}
				/>
				<img src={mamaearth} alt="brand-icon" className="brand-icon" />
			</div>
			<div className="amount-container">
				<HiOutlineCurrencyRupee size="1.5rem" />
				<p className="amount-details">
					Amount to pay: <span> &#8377;{order.amount}</span>
				</p>
			</div>
			<div className="upi-container">
				{userDevice === "android" || userDevice === "ios" ? (
					<>
						<p className="text-main">Pay using UPI Apps</p>
						<button
							className="upi-btn"
							name="phonepe"
							onClick={() => payUsingUPI("phonepe")}
						>
							<div>
								<img src={phonepay} className="upi-icon" alt="paytm-logo" />
								<p className="upi-name">PhonePe</p>
							</div>
							<img src={gokwikIcon} className="gk-btn-icon" alt="gokwik-icon" />
						</button>
						<button
							className="upi-btn"
							name="googlepay"
							onClick={() => payUsingUPI("googlepay")}
						>
							<div>
								<img src={gpay} className="upi-icon" alt="paytm-logo" />
								<p className="upi-name">Google Pay</p>
							</div>
							<img src={gokwikIcon} className="gk-btn-icon" alt="gokwik-icon" />
						</button>
						{userDevice !== "ios" && (
							<>
								<button
									className="upi-btn"
									name="paytm"
									onClick={() => payUsingUPI("paytm")}
								>
									<div>
										<img src={paytm} className="upi-icon" alt="paytm-logo" />
										<p className="upi-name">Paytm</p>
									</div>
									<img
										src={gokwikIcon}
										className="gk-btn-icon"
										alt="gokwik-icon"
									/>
								</button>
								<button
									className="upi-btn"
									name="bhimpay"
									onClick={() => payUsingUPI("bhimpay")}
								>
									<div>
										<img src={bhimpay} className="upi-icon" alt="paytm-logo" />
										<p className="upi-name">BHIM</p>
									</div>
									<img
										src={gokwikIcon}
										className="gk-btn-icon"
										alt="gokwik-icon"
									/>
								</button>
							</>
						)}
						<div className="or">
							<hr /> or <hr />
						</div>
					</>
				) : (
					<>
						<h3 className="text-main">No Direct Payment Options Available</h3>
						<hr className="hr" />
					</>
				)}

				<p className="text-main">Get Payment Link</p>
				<p className="text-desc">You will get a payment link on</p>
				<div className="pay-link-form">
					<input
						type="text"
						placeholder="Enter mobile number"
						value={phoneNumber}
						onChange={(e) => {
							setPhoneNumber(e.target.value);
						}}
					/>
					<button onClick={getPaymentLink}>Send</button>
				</div>
			</div>
			<div className="updates-container">
				<div>
					<p className="text-main">Get WhatsApp and SMS Updates</p>
					<p className="text-desc">Click on this to turn off updates</p>
				</div>
				<label className="switch">
					<input type="checkbox" />
					<span className="slider round"></span>
				</label>
			</div>
			<div className="branding-container">
				<p className="text-brand-desc">Powered By</p>
				<img src={gokwik} alt="gokwik-logo" className="gk-logo-icon" />
			</div>
		</div>
	);
}
