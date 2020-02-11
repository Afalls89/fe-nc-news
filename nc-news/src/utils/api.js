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

const patchVote = (article_id, inc_vote, type) => {
	console.log(inc_vote);
	return axios.patch(`${URL}/${type}/${article_id}`, { inc_vote });
};

const getTopics = () => {
	return axios.get(`${URL}/topics`).then(({ data }) => {
		return data.topics;
	});
};

module.exports = { getArticles, getSingleArticle, patchVote, getTopics };
