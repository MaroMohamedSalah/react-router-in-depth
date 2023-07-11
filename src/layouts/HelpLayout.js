import { NavLink, Outlet } from "react-router-dom";

const HelpLayout = () => {
	return (
		<div className="HelpLayout">
			<h2>Website Help</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
				reiciendis.
			</p>

			<nav>
				<NavLink to="faq">View the FAQ</NavLink>
				<NavLink to="contact">Contact Us</NavLink>
			</nav>

			<Outlet />
		</div>
	);
};

export default HelpLayout;
