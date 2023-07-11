import {
	Route,
	Routes,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import FAQ from "./pages/Help/FAQ";
import Contact from "./pages/Help/Contact";
import Posts from "./pages/Posts/Posts";
import PostDetails from "./pages/Posts/Post-details";
import PostsError from "./pages/Posts/Posts-error";
import { ErrorBoundary } from "react-error-boundary";
import BreadCrumbs from "./components/Breadcrumbs";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="posts" errorElement={<PostsError />}>
				<Route index element={<Posts />} />
				<Route path=":id" element={<PostDetails />} />
			</Route>
			<Route path="about" element={<About />} />
			<Route path="help" element={<HelpLayout />}>
				<Route path="faq" element={<FAQ />} />
				<Route path="contact" element={<Contact />} />
			</Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
