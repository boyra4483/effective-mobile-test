import { type AxiosRequestConfig } from "axios";

const moviesConfig: AxiosRequestConfig = {
	baseURL: "https://api.kinopoisk.dev/v1.4/movie/search?page=1&query=",
	headers: {
		"X-API-KEY": "QX6HE6Z-W6N4ACK-JDJQ1BE-0MC5FQ5"
	},
	method: "GET"
};

export default moviesConfig;
