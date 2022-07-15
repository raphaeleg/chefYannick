/** @format */

import React from 'react';
import '../App.css';
import { SupplierList, SustainPoints } from '../TextInfo';

const Suppliers = () => {
	//let thanks = "../images/event/thankyouLetter.png";
	return (
		<div className='container_pages'>
			<span>
				<span className='sustain_brief'>
					<h1 className='title_exp'>Doing the right thing is important for our future generations</h1>
					<span className="sustain_filler">
						<div className='filler-text-sustain'>
							<p className='sustainability_text'>For chef Yannick, the integrity of food and resources within the supply chain is key to reducing our carbon footprint. From procurement to packaging to waste management, his sustainable initiatives include:</p>
							<ul className='work_li'>
								{SustainPoints.map( ( item, index ) => {
									return (
										<li key={index} className='sustainability_text'>{item}</li>
									);
								} )}
							</ul>
						</div>
						<img className='filler-photo' src="../images/sustainPhotos2/fullSustainPhoto.png" alt="" />
					</span>
				</span>
				<h3 className='title_exp'>Our sustainable suppliers</h3>

				<span className="logo_bar">
					{SupplierList.map( ( item, index ) => {
						let background = {
							backgroundImage: `url(../images/suppliersLogo/${item.logo})`,
						};
						return (
							<a className='supplier_logo' href={item.link} target='_blank' rel='noreferrer'>
								<div className='supplier_logo' style={background}></div>
							</a>
						);
					} )}
				</span>
				{/* <div className='event_img'>
					<img src={thanks} alt="" />
				</div> */}
			</span>


		</div>
	);
};

export default Suppliers;
