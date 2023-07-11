import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClockLoader } from "react-spinners";

const PostDetails = () => {
	const [comments, setComments] = useState([]);
	const { id } = useParams();

	const getPosts = () => {
		fetch(`https://dummyjson.com/posts/${id}/comments`)
			.then((response) => {
				return response.json(); // Return the parsed JSON data
			})
			.then((data) => {
				setComments(data.comments);
			});
	};

	useEffect(() => {
		getPosts();
		console.log("posts", comments); // Log the fetched data
	}, []);
	return comments.length !== 0 ? (
		<div className="postDetails">
			<h1>The details for post num: {id}</h1>
			<ol>
				{comments.map((comment) => {
					return (
						<li key={comment.id}>
							<p>{comment.body}</p>
						</li>
					);
				})}
			</ol>
		</div>
	) : (
		<div className="spinier">
			<ClockLoader color="#BC4123" />
		</div>
	);
};

export default PostDetails;
