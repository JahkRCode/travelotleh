import React, { useState } from 'react';
import Loader from './Loader';
import '../css/Paginate.css';

/**** Assigns pagination based on movie count  *****/
const Paginate = ({ paginate, totalPages, currentPage }) => {
	let pageNumbers = [];
	let count = 0;
	let countIdx = 1;
	const [idx, setIdx] = useState(0);
	const totalGroups = Math.ceil(totalPages / 5);

	for (let i = 0; i < totalGroups; i++) {
		pageNumbers[i] = [];
		for (let j = count; j < countIdx * 5; j++) {
			pageNumbers[i].push(j + 1);
			count++;
		}
		countIdx++;
	}
	return (
		<>
			{!pageNumbers[idx] ? (
				<Loader />
			) : (
				<nav className='pagination'>
					<ul>
						<button
							className={`paginate-left-end`}
							disabled={idx === 0}
							onClick={() => {
								paginate(pageNumbers[idx - 1][0]);
								setIdx(idx - 1);
							}}
						>
							{'<<'}
						</button>
						<button
							className={`paginate-left`}
							disabled={currentPage === pageNumbers[idx][0]}
							onClick={() => paginate(currentPage - 1)}
						>
							{'<'}
						</button>
						{pageNumbers[idx].map((number) => (
							<li key={number}>
								<button
									className={`paginate-page ${
										number === currentPage ? 'active' : ''
									}`}
									onClick={() => paginate(number)}
								>
									{number}
								</button>
							</li>
						))}
						<button
							className={`paginate-right`}
							disabled={
								currentPage === pageNumbers[idx][pageNumbers[idx].length - 1]
							}
							onClick={() => paginate(currentPage + 1)}
						>
							{'>'}
						</button>
						<button
							className={`paginate-right-end`}
							disabled={idx === pageNumbers.length - 1}
							onClick={() => {
								paginate(pageNumbers[idx + 1][0]);
								setIdx(idx + 1);
							}}
						>
							{'>>'}
						</button>
					</ul>
				</nav>
			)}
		</>
	);
};

export default Paginate;
