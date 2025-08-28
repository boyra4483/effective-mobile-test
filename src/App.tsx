import styles from "./app.module.scss";
import React, { useEffect, useState } from "react";
import { type Movie, type Movies } from "./types/movies";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Card from "./components/card/Card";
import fetchMovies from "./api/fetchMovies";
import Modal from "./components/modal/Modal";

export default function App() {
	const [searchText, setSearchText] = useState<string>("");
	const [movies, setMovies] = useState<Movies | null>(null);
	const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
	const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
	const [page, setPage] = useState<number>(1);

	useEffect(() => {
		let ignore = false;
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

	function handleClick(movieId: number) {
		setIsVisibleModal(true);
		setSelectedMovie(movies?.find(movie => movie.id === movieId) || null);
	}

	async function handleScroll(e: React.UIEvent<HTMLUListElement>) {
		const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

		if (scrollTop + clientHeight >= scrollHeight - 20) {
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
					{getMovies(movies, handleClick)}
				</ul>
				{isVisibleModal ? (
					<Modal
						movieName={`${selectedMovie!.name}`}
						img={`${selectedMovie!.poster.previewUrl}`}
						genres={selectedMovie!.genres.map(genre => genre.name)}
						rating={+selectedMovie!.rating.kp.toFixed(1)}
						year={`${selectedMovie!.year}`}
						description={`${selectedMovie!.description}`}
						onClose={() => setIsVisibleModal(false)}
					/>
				) : null}
			</main>
		</>
	);
}

function getMovies(movies: Movies | null, handleClick: (id: number) => void) {
	return movies?.map((movie, i) => {
		return (
			<li
				className={styles["movie"]}
				key={i}
				onClick={() => handleClick(movie.id)}
			>
				<Card
					year={`${movie.year}`}
					src={movie.poster.previewUrl}
					movieName={movie.name}
				/>
			</li>
		);
	});
}
