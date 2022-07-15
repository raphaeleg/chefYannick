/** @format */

import React from 'react';
import '../App.css';
import Swipe from '../components/Swipe';

const HealthBlock = ( itemi ) => {
    const item = itemi.itemi;
    return (
        <span className='health_block'>
            <span className='hth_header'>
                <h3 className='exp_position'>{item.title}</h3>
                <p>{item.subtitle}</p>
            </span>
            <div className='health_img'>
                <span className="healthSwiperImages">
                    <div className='wrapper'>
                        <div className='main_wrapper'>
                            <Swipe for="health" idx={item.img} />
                        </div>
                    </div>
                </span>
            </div>
        </span>

    );
};

export default HealthBlock;
