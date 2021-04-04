import axios from "axios";

function getPost(id) {
	return axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
}

function getComments(id) {
	return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
}
export { getPost, getComments };
