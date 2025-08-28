import styles from "./modal.module.scss";

interface ModalProps {
	onClose: () => void;
	rating: number;
	description: string;
	movieName: string;
	year: string;
	genres: string[];
	img: string;
}

export default function Modal({
	rating,
	description,
	movieName,
	year,
	genres,
	img,
	onClose
}: ModalProps) {
	return (
		<div className={styles["modal"]}>
			<section className={styles["content"]}>
				<figure className={styles["media-object"]}>
					<img
						width="200px"
						height="300px"
						src={img}
						alt="movie poster"
						className={styles["media"]}
					/>
					<figcaption className={styles["object"]}>
						<h2 className={styles["movie-name"]}>{movieName}</h2>
						<time className={styles["movie-year"]} dateTime={year}>
							{year}
						</time>
						<ul className={styles["genres"]}>{getGenres(genres)}</ul>
						<p className={styles["description"]}>{description}</p>
					</figcaption>
				</figure>
				<div className={styles["rating"]}>
					<span>{rating}</span>
				</div>
				<div onClick={onClose} className={styles["close"]}></div>
			</section>
		</div>
	);
}

function getGenres(genres: string[]) {
	return genres.map(genre => (
		<li className={styles["genre"]} key={genre}>
			{genre}
		</li>
	));
}
