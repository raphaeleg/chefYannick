/** @format */

import React from 'react';
import profile from '../images/profile.png';
import '../App.css';
import { CVDesc, CVApproach, CVFuture } from '../TextInfo';

const CV = () => {
	return (
		<div className='container_pages container_cv'>
			<span className='cv_info'>
				<img className='profile_pic' src={profile} alt='Yannick' />
				<span className='desc_text'>
					<h3 className='subtitle'>Introduction to Chef Yannick</h3>
					{CVDesc.map( ( item, index ) => {
						return <p>{item}</p>;
					} )}
					<span className='approach'>
						<h3 className='subtitle'>Working Approach</h3>
						<ul className='work_li'>
							{CVApproach.map( ( item, index ) => {
								return <li>{item}</li>;
							} )}
						</ul>
					</span>
					<span className='approach'>
						<h3 className='subtitle'>Future</h3>
						<p>{CVFuture}</p>
					</span>
				</span>
			</span>
		</div>
	);
};

export default CV;
