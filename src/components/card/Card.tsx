import styles from "./card.module.scss";

interface CardProps {
	src: string;
	movieName: string;
	year: string;
}

export default function Card({ src, movieName, year }: CardProps) {
	return (
		<figure className={styles["figure"]}>
			<img
				src={src}
				width={200}
				height={300}
				alt="movie poster"
				className={styles["img"]}
			/>
			<figcaption className={styles["caption"]}>
				<h2 className={styles["movie-name"]}>{movieName}</h2>
				<time className={styles["movie-year"]} dateTime={year}>
					{year}
				</time>
			</figcaption>
		</figure>
	);
}
