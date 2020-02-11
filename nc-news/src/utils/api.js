const axios = require("axios");
const URL = "https://be-nc-news-2.herokuapp.com/api/";

const getArticles = (sort_by, topic) => {
	return axios
		.get(`${URL}articles`, {
			params: { sort_by, topic }
		})
		.then(({ data }) => {
			return data.articles;
		});
};

const getSingleArticle = article_id => {
	return axios.get(`${URL}/articles/${article_id}`).then(({ data }) => {
		return data.article;
	});
};

const patchVote = (id, inc_vote, type) => {
	return axios.patch(`${URL}/${type}/${id}`, { inc_vote });
};

const getTopics = () => {
	return axios.get(`${URL}/topics`).then(({ data }) => {
		return data.topics;
	});
};

const getComments = article_id => {
	return axios
		.get(`${URL}/articles/${article_id}/comments`)
		.then(({ data }) => {
			return data.comments;
		});
};

const postComment = (username, body, article_id) => {
	return axios
		.post(`${URL}/articles/${article_id}/comments`, { username, body })
		.then(({ data }) => {
			return data.comment;
		});
};

module.exports = {
	getArticles,
	getSingleArticle,
	patchVote,
	getTopics,
	getComments,
	postComment
};
