import "./OrderSuccess.css";
import gokwik from "./../../assets/gokwik-o.png";

export function OrderSuccess() {
	return (
		<div className="OrderSuccess">
			<div className="brand-container">
				<img src={gokwik} alt="gk-icon" className="gk-o-icon" />
			</div>
			<div className="order-success-container">
				<p className="os-main-text">Order successfully placed!</p>
				<p className="os-desc">
					Order is confirmed and is being processed by the merchant.
				</p>
			</div>
			<div className="os-branding-container">
				<p className="text-brand-desc">Powered By</p>
				<img src={gokwik} alt="gokwik-logo" className="gk-logo-icon" />
			</div>
		</div>
	);
}
