const axios = require("axios");

const getArticles = sort_by => {
	return axios
		.get("https://be-nc-news-2.herokuapp.com/api/articles", {
			params: { sort_by }
		})
		.then(({ data }) => {
			return data.articles;
		});
};

module.exports = { getArticles };
