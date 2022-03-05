import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=629b628d";

const App = () => {
	const [movies, setMovies] = useState([]);

	const searchMovies = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();

		setMovies(data.Search);
	};

	useEffect(() => {
		searchMovies("3 Ninjas");
	}, []);

	return (
		<div className="app">
			<h1>Movie Wanderer</h1>

			<div className="search">
				<input
					placeholder="Search for movies"
					value="Binder"
					onChange={() => {}}
				/>
				<img src={SearchIcon} alt="search" onClick={() => {}} />

				{movies?.length > 0 ? (
					<div className="container">
						{movies.map((movie) => (
							<MovieCard movie={movie}/>
						))}
					</div>
				) : (
					<div className="empty">
						<h2>No movies found</h2>
					</div>
				)}
			</div>
		</div>
	);
};

export default App;
