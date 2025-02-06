import React, { useState } from 'react';
import './GeminiAI.css';

const GeminiAIComponent = () => {
	const [userInput, setUserInput] = useState('');
	const [response, setResponse] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!userInput.trim()) return;

		setIsLoading(true);
		try {
			const response = await fetch(
				`https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`,
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						contents: [{
							parts: [{ text: userInput }]
						}]
					})
				}
			);

			if (!response.ok) {
				throw new Error('API request failed');
			}

			const data = await response.json();
			setResponse(data.candidates[0].content.parts[0].text);
		} catch (error) {
			console.error('Error:', error);
			setResponse(`Error: ${error.message}`);
		} finally {
			setIsLoading(false);
		}
	};

	const renderResponse = (text) => {
		if (!text) return null;

		const lines = text.split('\n');
		return lines.map((line, index) => {
			// Handle headings
			if (line.startsWith('#')) {
				const level = line.match(/^#+/)[0].length;
				const content = line.replace(/^#+\s/, '');
				return React.createElement(
					`h${level}`,
					{ key: index, className: `heading-${level}` },
					content
				);
			}

			// Handle list items
			if (line.startsWith('-')) {
				return (
					<li key={index} className="list-item">
						{line.substring(2)}
					</li>
				);
			}

			// Handle type definitions
			if (line.includes(':')) {
				const [type, description] = line.split(':').map(part => part.trim());
				return (
					<div key={index} className="type-definition">
						<strong>{type}</strong>
						<span>{description}</span>
					</div>
				);
			}

			// Handle regular text
			return line.trim() && (
				<p key={index} className="text-line">
					{line}
				</p>
			);
		});
	};

	return (
		<div className="gemini-container">
			<form onSubmit={handleSubmit} className="input-form">
				<textarea
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					placeholder="Ask about variable types in C..."
					disabled={isLoading}
					className="input-textarea"
				/>
				<button
					type="submit"
					disabled={isLoading}
					className="submit-button"
				>
					{isLoading ? 'Processing...' : 'Send'}
				</button>
			</form>

			{response && (
				<div className="response-container">
					<div className="formatted-response">
						{renderResponse(response)}
					</div>
				</div>
			)}
		</div>
	);
};

export default GeminiAIComponent;