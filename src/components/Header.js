import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
	const history = useNavigate();
	const [keyword, setKeyword] = useState('');

	/***** Adds keyword text to address bar for retrieval by other components *****/
	const submitHandler = (e) => {
		e.preventDefault();
		if (keyword.trim()) {
			history(`/search/${keyword}`);
		} else {
			history('/');
		}
	};
	return (
		<div className='header'>
			<a href='https://JahkRCode.co.ke'>
				<img src='/images/jahkrlogo.png' alt='Hire JahkR Code!'></img>
			</a>
			<form id='form' onSubmit={submitHandler}>
				<input
					type='text'
					id='search'
					className='search'
					placeholder='Search'
					onChange={(e) => setKeyword(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default Header;
