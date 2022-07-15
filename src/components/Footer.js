/** @format */

import React from 'react';
import '../App.css';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className='container_Footer'>
			<span className='contacts'>
				<span className='footer_para'>
					<div className='icon'>
						<MdEmail />
					</div>
					yannickgb1@hotmail.com
				</span>
				<span className='footer_para'>
					<div className='icon'>
						<MdPhone />
					</div>
					(852) 6112 6667
				</span>
			</span>
			<p className='footer_para cc'>
				© {year} Yannick Guillemot. All rights reserved.
			</p>
			<p className='footer_para cc'>
				<a target='_blank' rel='noreferrer' href="https://www.raphg.live">
					This website was created by Raphaele Guillemot.
				</a>
			</p>
		</div>
	);
};

export default Footer;
