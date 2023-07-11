import { useEffect, useState } from "react";
import { Link, useRouteError } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import PostsError from "./Posts-error";

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null); // New state variable for error
	const routeError = useRouteError(); // Get the error from React Router

	const getPosts = () => {
		fetch("https://dummyjson.com/posts")
			.then((response) => response.json())
			.then((data) => {
				setPosts(data.posts);
			})
			.catch((error) => {
				console.error("Error fetching posts:", error);
				setError(error); // Set the error state variable
			});
	};

	useEffect(() => {
		getPosts();
		console.log("posts", posts);
	}, []);

	// Check if there is an error, render PostsError component if true
	if (error || routeError) {
		return <PostsError />;
	}

	return (
		<div className="posts">
			{posts.map((post) => {
				return (
					<div className="post" key={post.id}>
						<Link to={`${post.id}`}>
							<h1>{post.title}</h1>
							<p>{post.body}</p>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Posts;
