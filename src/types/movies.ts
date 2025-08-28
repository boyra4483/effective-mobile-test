export type Movies = Movie[];

export interface Movie {
	id: number;
	name: string;
	description: string;
	year: number;
	rating: { kp: number };
	poster: { url: string; previewUrl: string };
	logo: { url: string; previewUrl: string };
	genres: { name: string }[];
}
