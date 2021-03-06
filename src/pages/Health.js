/** @format */

import React from 'react';
import '../App.css';
import { HealthFluff, HealthListV2 } from '../TextInfo';
import HealthBlock from '../components/HealthBlock';
import HealthRecipe from '../components/HealthRecipe.js';

const Health = () => {

    return (
        <div className='container_pages'>
            <span>
                <div className='filler-text'>
                    <h1 className='title_exp'>You are what you eat</h1>
                    <p className='healthDesc'>{HealthFluff}</p>
                </div>
                <div>
                    <span className='hth_li supplier'>
                        {HealthListV2.map( ( item, index ) => {
                            return (
                                <span key={index} className="healthCard">
                                    <HealthBlock itemi={item} />
                                </span>
                            );
                        } )}
                    </span>
                </div>
                <HealthRecipe />
            </span >
        </div >
    );
};

export default Health;