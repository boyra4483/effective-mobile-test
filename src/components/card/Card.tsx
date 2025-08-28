import styles from "./card.module.scss";

interface CardProps {
	src: string;
	movieName: string;
	year: string;
}

export default function Card({ src, movieName, year }: CardProps) {
	return (
		<figure className={styles["card"]}>
			<img
				src={src}
				width={200}
				height={300}
				alt="movie poster"
				className={styles["card__img"]}
			/>
			<figcaption className={styles["card__caption"]}>
				<h2 className={styles["card__movie-name"]}>{movieName}</h2>
				<time className={styles["card__movie-year"]} dateTime={year}>
					{year}
				</time>
			</figcaption>
		</figure>
	);
}
