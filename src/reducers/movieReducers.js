import { createReducer } from '@reduxjs/toolkit';
import {
	MOVIE_LIST_REQUEST,
	MOVIE_LIST_SUCCESS,
	MOVIE_LIST_FAILURE,
	GENRE_LIST_REQUEST,
	GENRE_LIST_SUCCESS,
	GENRE_LIST_FAILURE,
	SEARCH_INPUT,
} from '../constants/movieContants';

export const movieListReducer = createReducer({ movies: [] }, (builder) => {
	builder
		.addCase(MOVIE_LIST_REQUEST, (state) => {
			return { loading: true, ...state };
		})
		.addCase(MOVIE_LIST_SUCCESS, (state, action) => {
			return {
				loading: false,
				movies: action.payload.results,
				page: action.payload.page,
				totalPages: action.payload.total_pages,
			};
		})
		.addCase(MOVIE_LIST_FAILURE, (action) => {
			return { loading: false, error: action.payload };
		})
		.addDefaultCase((state, action) => {
			return state;
		});
});
export const genreListReducer = createReducer({ genres: [] }, (builder) => {
	builder
		.addCase(GENRE_LIST_REQUEST, (state) => {
			return { loading: true, ...state };
		})
		.addCase(GENRE_LIST_SUCCESS, (state, action) => {
			return { loading: false, genres: action.payload };
		})
		.addCase(GENRE_LIST_FAILURE, (action) => {
			return { loading: false, error: action.payload };
		})
		.addDefaultCase((state, action) => {
			return state;
		});
});
export const searchInputReducer = createReducer({}, (builder) => {
	builder
		.addCase(SEARCH_INPUT, (state, action) => {
			return { ...state, keyword: action.payload, loading: false };
		})
		.addDefaultCase((state) => {
			return state;
		});
});
