import type { ReactNode } from "react";
import styles from "./header.module.scss";

interface HeaderProps {
	children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
	return (
		<header className={styles["header"]}>
			<h1 className={styles["header__title"]}>Каталог фильмов</h1>
			{children}
		</header>
	);
}
