import React, { useState } from 'react';
import '../App.css';
import ExpBlock from '../components/ExpBlock';
import ExpExtend from '../components/ExpExtend';
import { ExpItems } from '../TextInfo';
import { MdArrowRight, MdArrowDropDown } from 'react-icons/md';

const Experience = () => {
	const [active, setActive] = useState( 100 );
	const dropdown = ( index ) => {
		if ( active !== index )
			setActive( index );
		else
			setActive( 1000 );
	};
	return (
		<div className='container_pages container_exp'>
			<div className='exp_list'>
				{ExpItems.map( ( item, index ) => {
					const background = {
						backgroundImage: `url(../images/loc/${item.img})`,
					};

					// var desc = ""
					// if ( item.desc != null ) {
					// 	desc = <p className='exp_desc'>
					// 		{item.desc}
					// 	</p>
					// }
					return item.cert != null ? (
						<span className="exp_item">
							<span className='exp_block exp_cert_block' onClick={() => dropdown( index )} key={index}>
								<div className='exp_location_img' style={background}></div>
								<span className='exp_header'>
									<span className='exp_toggle_title'>
										<h3 className='exp_position'>{item.title}</h3>
										<span className='toggle_icon'>
											{active === index ? (
												<MdArrowDropDown className='toggle-arr' />
											) : (
												<MdArrowRight className='toggle-arr' />
											)}
										</span>
									</span>
									<p>
										<a target='_blank' rel='noreferrer' href={item.link}>
											{item.loc}
										</a>
									</p>
									<p className='exp_period'>{item.highlight}</p>
									<p className='exp_period'>{item.period}</p>
								</span>
							</span>
							{active === index && (
								<ExpExtend desc={item.desc} certArray={item.cert} ach={item.ach} certDescs={item.certDesc} />
							)}
						</span>
					) : (
						<span className="exp_item" key={index}>
							<ExpBlock item={item} />
						</span>
					);
				} )}
			</div>
		</div>
	);
};

export default Experience;
