import axios from "axios";
import { type Movies } from "../types/movies";
import moviesConfig from "../axios/moviesConfig";

export default async function fetchMovies(page: number = 1, movieName: string) {
	console.log(page);
	const moviesRes = await axios<Movies>(
		`search?page=${page}&limit=10&query=${movieName}`,
		moviesConfig
	);
	return moviesRes.data;
}
