import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listMovies, listGenres } from '../actions/movieActions';
import Loader from '../components/Loader';
import Movie from '../components/Movie';
import Paginate from '../components/Paginate';
import '../css/HomeScreen.css';

const HomeScreen = () => {
	const keyword = useParams().keyword;
	const dispatch = useDispatch();
	const movieList = useSelector((state) => state.movieList);
	const { loading, error, movies, page, totalPages } = movieList;
	const genreList = useSelector((state) => state.genreList);
	const { loading: loadingGenres, error: errorGenres, genres } = genreList;
	const [currentPage, setCurrentPage] = useState(1);

	const [moviesPerPage] = useState(20);
	const indexOfLastMovie = currentPage * moviesPerPage;
	const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
	let currentMovies = [...movies]; // Deep copy of movies array for pagination

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
		dispatch(listMovies(keyword, genres, pageNumber));
	};
	useEffect(() => {
		currentMovies = currentMovies.slice(indexOfFirstMovie, indexOfLastMovie);
		if (genres.length === 0) {
			dispatch(listGenres());
		}
		dispatch(listMovies(keyword, genres, currentPage));
	}, [dispatch, keyword, currentPage, page]);
	return (
		<div className='home-screen-container'>
			{loading || loadingGenres ? (
				<Loader />
			) : error || errorGenres ? (
				<h1>{error}</h1>
			) : (
				<div className='movies-container'>
					{currentMovies.map((movie) => (
						<div className='movie-container' key={movie.id}>
							<Movie movie={movie} genres={genres} />
						</div>
					))}
				</div>
			)}
			<Paginate
				paginate={paginate}
				totalPages={totalPages}
				currentPage={currentPage}
			/>
		</div>
	);
};

export default HomeScreen;
