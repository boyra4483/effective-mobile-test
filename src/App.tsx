import styles from "./app.module.scss";
import React, { useEffect, useState } from "react";
import { type Movies } from "./types/movies";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Card from "./components/card/Card";
import fetchMovies from "./api/fetchMovies";

export default function App() {
	const [searchText, setSearchText] = useState<string>("");
	const [movies, setMovies] = useState<Movies | null>(null);
	const [page, setPage] = useState<number>(1);

	useEffect(() => {
		let ignore = false;
		console.log("fetching movies");
		(async () => {
			const movies = await fetchMovies(1, "");
			if (!ignore) {
				setMovies(movies);
			}
		})();

		return () => {
			ignore = true;
		};
	}, []);

	async function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchText(e.target.value);
		const movies = await fetchMovies(1, e.target.value);
		setMovies(movies);
	}

	async function handleScroll(e: React.UIEvent<HTMLUListElement>) {
		const currentTarget = e.currentTarget;
		if (
			currentTarget.scrollTop + currentTarget.clientHeight >=
			currentTarget.scrollHeight - 20
		) {
			const res = await fetchMovies(page + 1, "");
			setMovies([...movies!, ...res]);
			setPage(page + 1);
		}
	}

	return (
		<>
			<Header>
				<Search value={searchText} onSearch={handleSearch} />
			</Header>
			<main className={styles["content"]}>
				<ul onScroll={handleScroll} className={styles["movies"]}>
					{getMovies(movies)}
				</ul>
			</main>
		</>
	);
}

function getMovies(movies: Movies | null) {
	return movies?.map((movie, i) => {
		return (
			<li className={styles["movie"]} key={i}>
				<Card
					year={`${movie.year}`}
					src={movie.poster.previewUrl}
					movieName={movie.name}
				/>
			</li>
		);
	});
}
