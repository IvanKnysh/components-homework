import React, {useState, useEffect} from 'react';

const Time = () => {
	const [time, setTime] = useState(new Date());

	setInterval(() => {
		setTime(new Date());
	}, 1000);

	return (
		<>
			<h1>Current time - {time.toLocaleTimeString()}</h1>
		</>
	);
};

export default Time;