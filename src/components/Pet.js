import React from 'react';

const Pet = ({breeds, сountry, time_birth_breed, type, weight, growth, pfespan, img}) => {
	return (
		<>
			<img src={img} alt=""/>
			<p>Название породы: {breeds}</p>
			<p>Страна происхождения: {сountry}</p>
			<p>Время зарождения породы: {time_birth_breed}</p>
			<p>Тип: {type}</p>
			<p>Вес: {weight}</p>
			<p>Рост (высота в холке): {growth}</p>
			<p>Продолжительность жизни: {pfespan}</p>
		</>
	);
};

export default Pet;