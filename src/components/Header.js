import React, { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
	const [logbtn, setlogbtn] = useState("Login");

	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL}></img>
			</div>
			<div className="nav-items">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
					<button
						class="log-btn"
						onClick={() => {
							logbtn === "Login" ? setlogbtn("Logout") : setlogbtn("Login");
						}}
					>
						{logbtn}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
