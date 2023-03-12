import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import './App.css';

function App() {
	return (
		<>
			<Header />
			<main id='main'>
				<Routes>
					<Route path='/' exact element={<HomeScreen />} />
					<Route path='/search/:keyword' exact element={<HomeScreen />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
