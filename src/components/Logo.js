/** @format */

import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link className='logo' to={'/'}>
			<h1>Chef Yannick</h1>
		</Link>
	);
};

export default Logo;
