/** @format */

import React from 'react';
import '../App.css';

const ExpBlock = ( item ) => {
	const background = {
		backgroundImage: `url(../images/loc/${item.item.img})`,
	};
	return (
		<span className='exp_block'>
			<div className='exp_location_img' style={background}></div>
			<span className='exp_header'>
				<h3 className='exp_position'>{item.item.title}</h3>
				<a target='_blank' rel='noreferrer' href={item.item.link}>
					{item.item.loc}
				</a>
				<p className='exp_period'>{item.item.period}</p>
			</span>
		</span>
	);
};

export default ExpBlock;
