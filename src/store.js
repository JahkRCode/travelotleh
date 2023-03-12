import { configureStore } from '@reduxjs/toolkit';
import {
	movieListReducer,
	genreListReducer,
	searchInputReducer,
} from './reducers/movieReducers';

const store = configureStore({
	reducer: {
		movieList: movieListReducer,
		genreList: genreListReducer,
		searchInput: searchInputReducer,
	},
});

export default store;
