const axios = require("axios");

const getArticles = () => {
	return axios
		.get("https://be-nc-news-2.herokuapp.com/api/articles")
		.then(({ data }) => {
			return data.articles;
		});
};

module.exports = { getArticles };
