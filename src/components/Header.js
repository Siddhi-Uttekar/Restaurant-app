import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import logo from '../logo.jpg';
import UserContext from "../utils/UserContext";

const Header = () => {
	const [logbtn, setlogbtn] = useState("Login");

	const {loggedInUser} = useContext(UserContext);

	return (
		<div className="flex justify-between p-3 shadow-lg ">
			<div className="logo-container">
				<img className="w-20" src={logo}></img>
			</div>
			<div className="flex items-center m-2">
				<ul className='flex'>
					<li className="px-4">
						<Link to="/">Home</Link>
					</li>
					<li className="px-4">
						<Link to="/about">About Us</Link>
					</li>
					<li className="px-4">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="px-4">
						<Link to="/cart">Cart</Link>
					</li>
					<button className="px-4"
						class="log-btn"
						onClick={() => {
							logbtn === "Login" ? setlogbtn("Logout") : setlogbtn("Login");
						}}
					>
						{logbtn}
					</button>
					<li className="">{loggedInUser}</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
