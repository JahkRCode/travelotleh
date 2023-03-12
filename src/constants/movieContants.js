// API constants
export const API_KEY = '4339b6528783a8c1cee9ad35108a2f92';
export const API_URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
export const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
export const MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=`;
export const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/`;
export const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
export const SEARCH_BY_NAME = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&query="`;
export const SEARCH_BY_GENRE = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=`;
// Redux related contants
export const MOVIE_LIST_REQUEST = 'MOVIE_LIST_REQUEST';
export const MOVIE_LIST_SUCCESS = 'MOVIE_LIST_SUCCESS';
export const MOVIE_LIST_FAILURE = 'MOVIE_LIST_FAILURE';
export const GENRE_LIST_REQUEST = 'GENRE_LIST_REQUEST';
export const GENRE_LIST_SUCCESS = 'GENRE_LIST_SUCCESS';
export const GENRE_LIST_FAILURE = 'GENRE_LIST_FAILURE';
export const SEARCH_INPUT = 'SEARCH_INPUT';
