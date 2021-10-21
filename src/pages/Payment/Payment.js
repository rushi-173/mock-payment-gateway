import "./Payment.css";
import mamaearth from "./../../assets/mamaearth.png";
import paytm from "./../../assets/paytm.png";
import phonepay from "./../../assets/phonepay.png";
import gpay from "./../../assets/gpay.jpg";
import bhimpay from "./../../assets/bhim.png";
import gokwikIcon from "./../../assets/gokwik-icon-dark.png";
import gokwik from "./../../assets/gokwik.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
export function Payment() {
	return (
		<div className="Payment">
			<div className="brand-container">
				<FaLongArrowAltLeft size="1.5rem" />
				<img src={mamaearth} alt="brand-icon" className="brand-icon" />
			</div>
			<div className="amount-container">
				<HiOutlineCurrencyRupee size="1.5rem" />
				<p className="amount-details">
					Amount to pay: <span> &#8377;500</span>
				</p>
			</div>
			<div className="upi-container">
				<p className="text-main">Pay using UPI Apps</p>
				<button className="upi-btn">
					<div>
						<img src={phonepay} className="upi-icon" alt="paytm-logo" />
						<p className="upi-name">PhonePe</p>
					</div>
					<img src={gokwikIcon} className="gk-btn-icon" alt="gokwik-icon" />
				</button>
				<button className="upi-btn">
					<div>
						<img src={gpay} className="upi-icon" alt="paytm-logo" />
						<p className="upi-name">Google Pay</p>
					</div>
					<img src={gokwikIcon} className="gk-btn-icon" alt="gokwik-icon" />
				</button>
				<button className="upi-btn">
					<div>
						<img src={paytm} className="upi-icon" alt="paytm-logo" />
						<p className="upi-name">Paytm</p>
					</div>
					<img src={gokwikIcon} className="gk-btn-icon" alt="gokwik-icon" />
				</button>
				<button className="upi-btn">
					<div>
						<img src={bhimpay} className="upi-icon" alt="paytm-logo" />
						<p className="upi-name">BHIM</p>
					</div>
					<img src={gokwikIcon} className="gk-btn-icon" alt="gokwik-icon" />
				</button>
				<div className="or">
					<hr /> or <hr />
				</div>
				<p className="text-main">Get Payment Link</p>
				<p className="text-desc">You will get a payment link on</p>
				<div className="pay-link-form">
					<input type="text" />
					<button>Send</button>
				</div>
			</div>
			<div className="updates-container">
				<div>
					<p className="text-main">Get WhatsApp and SMS Updates</p>
					<p className="text-desc">Click on this to turn off updates</p>
				</div>
				<label class="switch">
					<input type="checkbox" />
					<span class="slider round"></span>
				</label>
			</div>
			<div className="branding-container">
				<p className="text-brand-desc">Powered By</p>
				<img src={gokwik} alt="gokwik-logo" className="gk-logo-icon" />
			</div>
		</div>
	);
}
