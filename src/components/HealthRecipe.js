import React, { useState } from 'react';
import { Recipes } from '../TextInfo';
import '../App.css';

const HealthRecipe = () => {
    const [active, setActive] = useState( [100, 100] );
    const dropdown = ( index1, index2 ) => {
        let value = [index1, index2];
        if ( active[0] == index1 && active[1] == index2 )
            setActive( [100, 100] );
        else if ( ( value[0] == 4 && value[1] == 1 ) )
            setActive( [100, 100] );
        else if ( ( value[0] == 1 && value[1] == 2 ) )
            setActive( [100, 100] );
        else
            setActive( value );
    };
    return (
        <div className="healthRecipeContainer">
            <div className='filler-text'>
                <h1 className='title_exp'>A Weekly Menu of Tasty and Healthy Diet</h1>
                <h1><i>[click for recipes]</i></h1>
                <p className='healthDesc'></p>
            </div>
            <div className="recipeGrid">
                {Recipes.map( ( item, index ) => {
                    return (
                        <span key={index} className="recipeDayBlock">
                            <p className='recipeDay'>{item.day}</p>
                            {item.dishes.map( ( itemv2, indexv2 ) => {
                                let classes = "";
                                ( ( index == active[0] && indexv2 == active[1] ) ? classes = "recipeBlock recipeActive" : classes = "recipeBlock" )
                                return (
                                    <span key={indexv2} className={classes} onClick={() => dropdown( index, indexv2 )}>
                                        <p className="annotateP">{itemv2.type}</p>
                                        <p className="recipeDish">{itemv2.name}</p>
                                    </span>
                                );
                            } )}
                        </span>
                    );
                } )}
            </div>
            {active[0] !== 100 &&
                <span>
                    <h3 className="recipeDish">{Recipes[active[0]].dishes[active[1]].name}</h3>
                    <div className="recipeDisplay">
                        <span>
                            <h2><b>Ingredients</b></h2>
                            <ul className="work_li">
                                {Recipes[active[0]].dishes[active[1]].ingred.map( ( item, index ) => {
                                    if ( item.ach ) {
                                        return (
                                            <li key={index}>{item.name}
                                                <ul className="work_li">
                                                    {item.ach.map( ( itemv2, indexv2 ) => {
                                                        return < li key={indexv2} > {itemv2}</li>
                                                    } )}
                                                </ul>
                                            </li>
                                        );
                                    }
                                    else {
                                        return (
                                            <li key={index}>{item.name}</li>
                                        );
                                    }
                                } )}
                            </ul>
                        </span>
                        <span>
                            <h2><b>Method</b></h2>
                            <ol className="work_li">
                                {Recipes[active[0]].dishes[active[1]].method.map( ( item, index ) => {
                                    return (
                                        <li key={index}>{item.name}</li>
                                    );
                                } )}
                            </ol>
                        </span>

                    </div>
                </span>
            }
        </div>
    )
}

export default HealthRecipe