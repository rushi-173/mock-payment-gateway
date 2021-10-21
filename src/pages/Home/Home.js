import gokwikIcon from "./../../assets/gokwik-icon-dark.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import mamaearth from "./../../assets/mamaearth.png";
import { orderData } from "../../config";
import { useNavigate } from "react-router-dom";

export function Home() {
	const navigate = useNavigate();
	const order = orderData;
	return (
		<div className="Home">
			<div className="brand-container">
				<FaLongArrowAltLeft size="1.5rem" />
				<img src={mamaearth} alt="brand-icon" className="brand-icon" />
			</div>
			<div className="order-success-container">
				<p className="os-main-text">Order Details</p>
				<br />
				<p className="os-desc">
					Order Payment Type: {order.orderType === "cod" ? "COD" : "UPI"}
				</p>
				<p className="os-desc">Order Amount: {order.amount}</p>
				<br />
				<br />
				<button
					className="upi-btn"
					name="phonepe"
					onClick={() =>
						order.orderType === "cod" ? navigate("/success") : navigate("/upi")
					}
				>
					<p className="upi-name">Proceed</p>
					<img src={gokwikIcon} className="gk-btn-icon" alt="gokwik-icon" />
				</button>
			</div>
		</div>
	);
}
