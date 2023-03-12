import React from 'react';
import { IMG_PATH } from '../constants/movieContants';
import '../css/Movie.css';

const Movie = ({ movie, genres }) => {
	/***** Maps given movie genre IDs with their respective genre names *****/
	const getGenres = (genreIds) => {
		const genresText = [];
		genreIds.forEach((id) => {
			genres.find((genre) => {
				if (genre.id === id) {
					genresText.push(genre.name);
				}
				return genre.id === id;
			});
		});

		return genresText.toString();
	};
	return (
		<div key={movie.id} className='movie-card float-in'>
			<div className='front'>
				<div className='movie-header'>
					<div className='left'>
						<img src={IMG_PATH + movie.poster_path} alt={movie.title} />
					</div>
					<div className='right'>
						<h3>{movie.title}</h3>
						<span className='release-date'>
							{movie.release_date.slice(0, 4)}
						</span>
					</div>
				</div>
				<div className='movie-details'>
					<span className='genres'>{getGenres(movie.genre_ids)}</span>
					<span className='rating'>{movie.vote_average}</span>
				</div>
			</div>
			<div className='back'>
				<div className='movie-header'>
					<div className='left'>
						<img src={IMG_PATH + movie.poster_path} alt={movie.title} />
					</div>
					<div className='right'>
						<h3>{movie.original_title}</h3>
						<span className='release-date'>{movie.release_date}</span>
					</div>
				</div>
				<div className='movie-details'>
					<span className='runtime'>{movie.details.runtime} minutes</span>
					<span className='rating'>{movie.vote_average}</span>
				</div>
				<div className='overview'>
					<h3>Overview</h3>
					<span>{movie.overview}</span>
				</div>
			</div>
		</div>
	);
};

export default Movie;
