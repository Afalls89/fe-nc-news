const axios = require("axios");
const URL = "https://be-nc-news-2.herokuapp.com/api/";

const getArticles = sort_by => {
	return axios
		.get(`${URL}articles`, {
			params: { sort_by }
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

module.exports = { getArticles, getSingleArticle };
