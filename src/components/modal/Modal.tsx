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
			<section className={styles["modal__content"]}>
				<figure className={styles["modal__media-object"]}>
					<img
						width="200px"
						height="300px"
						src={img}
						alt="movie poster"
						className={styles["modal__media"]}
					/>
					<figcaption className={styles["modal__details"]}>
						<h2 className={styles["modal__movie-name"]}>{movieName}</h2>
						<time className={styles["modal__movie-year"]} dateTime={year}>
							{year}
						</time>
						<ul className={styles["modal__genres"]}>{getGenres(genres)}</ul>
						<p className={styles["modal__description"]}>{description}</p>
					</figcaption>
				</figure>
				<div className={styles["modal__rating"]}>
					<span>{rating}</span>
				</div>
				<div onClick={onClose} className={styles["modal__close"]}></div>
			</section>
		</div>
	);
}

function getGenres(genres: string[]) {
	return genres.map(genre => (
		<li className={styles["modal__genre"]} key={genre}>
			{genre}
		</li>
	));
}
