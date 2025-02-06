import React from 'react';
import './UserInfo.css';

const UserInfo = ({ username }) => {
	return (
		<div className="user-info">
			<h2>Current User: NIKPATIL2123</h2>
			<p className="username">{username}</p>
		</div>
	);
};

export default UserInfo;