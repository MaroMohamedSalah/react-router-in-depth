import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbs from "../components/Breadcrumbs";

const RootLayout = () => {
	return (
		<div className="RootLayout">
			<header>
				<nav>
					<h1>Marwan</h1>
					<NavLink to="/">Home</NavLink>
					<NavLink to="posts">Posts</NavLink>
					<NavLink to="about">About</NavLink>
					<NavLink to="help">Help</NavLink>
				</nav>
			</header>
			<main>
				<BreadCrumbs />
				<Outlet />
			</main>
		</div>
	);
};

export default RootLayout;
