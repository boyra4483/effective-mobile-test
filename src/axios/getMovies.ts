import axios from "axios";

export const getMovies = axios.create({
	baseURL: "https://api.kinopoisk.dev/v1.4/movie/search/",
	headers: {
		"X-API-KEY": "QX6HE6Z-W6N4ACK-JDJQ1BE-0MC5FQ5"
	},
	method: "GET"
});
