import styles from "./search.module.scss";

interface SearchProps {
	value: string;
	onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Search({ value, onSearch }: SearchProps) {
	return (
		<input
			className={styles["search"]}
			type="text"
			name="movie-name"
			id="search"
			value={value}
			onChange={onSearch}
		/>
	);
}
