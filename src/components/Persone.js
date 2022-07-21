import React from 'react';

const Persone = ({ name, phone, email, city, experience, skills, img }) => {
	return (
		<>
			<h2>Завдання 2: Створіть додаток «Персональна сторінка». Він повинен містити інформацію про вас:</h2>
			<h3>{name}</h3>
			<h4>{phone}</h4>
			<h5>{email}</h5>
			<h5>{city}</h5>
			<h5>{experience}</h5>
			<h5>{skills}</h5>
			<img src={img} alt="img" />
		</>
	);
};

export default Persone;