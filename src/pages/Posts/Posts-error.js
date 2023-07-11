import { Link, useRouteError } from "react-router-dom";

const PostsError = () => {
	const error = useRouteError();
	return (
		<div className="error">
			<h3>Hey We have an Error!</h3>
			<Link to={"/"}>Go to Home</Link>
		</div>
	);
};

export default PostsError;
