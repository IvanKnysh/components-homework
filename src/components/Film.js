import React from 'react';

const Film = ({ name, producer, year, company, poster }) => {
	return (
		<>
			<h2>Завдання 1: Створіть додаток «Улюблений фільм». Він повинен містити інформацію про ваш улюблений фільм:</h2>
			<h3>{name}</h3>
			<p>Режиссер: {producer}</p>
			<p>Год: {year}</p>
			<p>Кинокомпания: {company}</p>
			<img src={poster} alt="poster" />
		</>
	);
};

export default Film;