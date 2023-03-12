import axios from 'axios';
import {
	MOVIE_LIST_REQUEST,
	MOVIE_LIST_SUCCESS,
	MOVIE_LIST_FAILURE,
	MOVIES_URL,
	GENRE_LIST_REQUEST,
	GENRE_LIST_SUCCESS,
	GENRE_LIST_FAILURE,
	GENRES_URL,
	SEARCH_INPUT,
	SEARCH_BY_NAME,
	SEARCH_BY_GENRE,
	MOVIE_DETAILS_URL,
	API_KEY,
} from '../constants/movieContants';

/***** Action to retrieve list of genres *****/
export const listGenres = () => async (dispatch) => {
	try {
		dispatch({ type: GENRE_LIST_REQUEST });
		const { data } = await axios.get(GENRES_URL);
		dispatch({ type: GENRE_LIST_SUCCESS, payload: data.genres });
	} catch (error) {
		dispatch({
			type: GENRE_LIST_FAILURE,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

/***** Action to retrieve list of movies *****/
export const listMovies = (keyword, genres, pageNumber) => async (dispatch) => {
	try {
		dispatch({ type: MOVIE_LIST_REQUEST });

		/***** Search functionality based on if keyword matches a movies' genre or title *****/
		if (keyword) {
			let genreId = 0;
			genres.find((genre) => {
				if (genre.name.toLowerCase() === keyword.toLowerCase()) {
					genreId = genre.id;
				}
				return genre.name.toLowerCase() === keyword.toLowerCase();
			});
			if (genreId) {
				const { data } = await axios.get(
					`${SEARCH_BY_GENRE + genreId}&page=${pageNumber}`
				);

				/***** Retrieve missing runtime attribute and appends to movie object  *****/
				await Promise.all(
					data.results.map(async (movie) => {
						const respDetails = await axios.get(
							`${
								MOVIE_DETAILS_URL + movie.id
							}?api_key=${API_KEY}&language=en-US`
						);
						movie.details = respDetails.data;
					})
				);
				dispatch({ type: MOVIE_LIST_SUCCESS, payload: data });
			} else {
				const { data } = await axios.get(
					`${SEARCH_BY_NAME + keyword}&page=${pageNumber}`
				);

				/***** Retrieve missing runtime attribute and appends to movie object  *****/
				await Promise.all(
					data.results.map(async (movie) => {
						const respDetails = await axios.get(
							`${
								MOVIE_DETAILS_URL + movie.id
							}?api_key=${API_KEY}&language=en-US`
						);
						movie.details = respDetails.data;
					})
				);
				dispatch({ type: MOVIE_LIST_SUCCESS, payload: data });
			}
		} else {
			const { data } = await axios.get(MOVIES_URL + pageNumber);

			/***** Retrieve missing runtime attribute and appends to movie object  *****/
			await Promise.all(
				data.results.map(async (movie) => {
					const respDetails = await axios.get(
						`${MOVIE_DETAILS_URL + movie.id}?api_key=${API_KEY}&language=en-US`
					);
					movie.details = respDetails.data;
				})
			);
			dispatch({ type: MOVIE_LIST_SUCCESS, payload: data });
		}
	} catch (error) {
		dispatch({
			type: MOVIE_LIST_FAILURE,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
export const searchInput = (keyword) => async (dispatch) => {
	dispatch({ type: SEARCH_INPUT, payload: keyword });
};
