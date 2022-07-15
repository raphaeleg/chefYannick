/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import '../App.css';

const NavBar = () => {
	const [active, setActive] = useState(false);
	const showMenu = () => {
		setActive(!active);
	};

	return (
		<div className='NavBar'>
			<div className='menu-icon'>
				<MdMenu className='menu' onClick={showMenu} />
			</div>
			<nav className={active ? 'slider active' : 'slider'}>
				<ul>
					<div className='closed'>
						<MdClose className='close' onClick={showMenu} />
					</div>
					<li onClick={showMenu}>
						<Link to='/trainings'>Parcours / Trainings</Link>
					</li>
					<li onClick={showMenu}>
						<Link to='/events'>Menus / Events</Link>
					</li>

					<li onClick={showMenu}>
						<Link to='/sustainability'>Sustainability</Link>
					</li>
					<li onClick={showMenu}>
						<Link to='/health'>Nutrition / Health</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
