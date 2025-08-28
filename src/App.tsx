import React, { useState } from "react";
import { type Movies } from "./types/movies";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import moviesConfig from "./axios/moviesConfig";
import axios from "axios";

export default function App() {
	const [searchText, setSearchText] = useState<string>("");
	const [movies, setMovies] = useState<Movies | null>(null);

	async function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchText(e.target.value);
		const moviesRes = await axios<Movies>(e.target.value, moviesConfig);
		setMovies(moviesRes.data);
	}

	return (
		<>
			<Header>
				<Search value={searchText} onSearch={handleSearch} />
			</Header>
		</>
	);
}
