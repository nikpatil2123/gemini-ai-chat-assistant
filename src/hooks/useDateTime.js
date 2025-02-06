import { useState, useEffect } from 'react';

const useDateTime = () => {
	const [currentDateTime, setCurrentDateTime] = useState('');

	useEffect(() => {
		const updateDateTime = () => {
			try {
				const now = new Date();
				const formatted = now.toISOString().replace('T', ' ').slice(0, 19);
				setCurrentDateTime(formatted);
			} catch (error) {
				console.error('Error updating date/time:', error);
				setCurrentDateTime('Error loading date/time');
			}
		};

		updateDateTime();
		const interval = setInterval(updateDateTime, 1000);

		return () => clearInterval(interval);
	}, []);

	const formatDateTime = (format = 'default') => {
		const date = new Date();
		switch (format) {
			case 'short':
				return date.toLocaleString();
			case 'date':
				return date.toLocaleDateString();
			case 'time':
				return date.toLocaleTimeString();
			default:
				return currentDateTime;
		}
	};

	return {
		currentDateTime,
		formatDateTime
	};
};

export default useDateTime;