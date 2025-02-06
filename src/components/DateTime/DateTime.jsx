import React from 'react';
import useDateTime from '../../hooks/useDateTime';
import './DateTime.css';

const DateTime = () => {
	const { currentDateTime } = useDateTime();

	return (
		<div className="datetime-container">
			<h2>Current UTC Date and Time:</h2>
			<p className="datetime">{currentDateTime}</p>
		</div>
	);
};

export default DateTime;