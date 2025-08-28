import { type AxiosRequestConfig } from "axios";
import { type Movies } from "../types/movies";

const moviesConfig: AxiosRequestConfig = {
	baseURL: "https://api.kinopoisk.dev/v1.4/movie",
	headers: {
		"X-API-KEY": "QX6HE6Z-W6N4ACK-JDJQ1BE-0MC5FQ5"
	},
	method: "GET",
	transformResponse: transformer
};

function transformer(data: string) {
	const parsedData = JSON.parse(data);
	const movies: Movies = parsedData.docs;
	return movies;
}

export default moviesConfig;
