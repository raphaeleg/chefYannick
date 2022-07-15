import { React, useState } from 'react';
import { MenuList, Collab, EventImages, EventsList } from '../TextInfo';
import '../App.css';
import { MdArrowRight, MdArrowDropDown } from 'react-icons/md';
import Swipe from '../components/Swipe';

const Events = () => {
    const [active, setActive] = useState( 0 );
    const dropdown = ( index ) => {
        if ( active !== index )
            setActive( index );
        else
            setActive( 1000 );
    };
    return (
        <span className="container_pages container_exp">
            <span className="menu_list">
                {MenuList.map( ( item, index ) => {
                    const background = {
                        backgroundImage: `url(../images/menusT/${item.mainImg})`,
                    };
                    return <span className="menu_cat">
                        <span className='menu_block' onClick={() => dropdown( index )} key={index}>
                            <div className='exp_location_img' style={background}></div>
                            <span className='exp_header'>
                                <span className='exp_toggle_title'>
                                    <h3 className='exp_position'>{item.category}</h3>
                                    <span className='toggle_icon'>
                                        {active === index ? (
                                            <MdArrowDropDown className='toggle-arr' />
                                        ) : (
                                            <MdArrowRight className='toggle-arr' />
                                        )}
                                    </span>
                                </span>
                            </span>
                        </span>
                        {active === index && (
                            <span className="menu_extend">
                                <div className="menu_container">
                                    {item.menu != null &&
                                        item.menu.map( ( set, index_set ) => {
                                            return <div className="menu_set_container">
                                                <h3>{set.name}</h3>
                                                {set.desc != null &&
                                                    set.desc.map( ( dish, index_dish ) => {
                                                        return <p>{dish}</p>
                                                    } )
                                                }
                                            </div>
                                        } )
                                    }
                                </div>
                                <div className="menuSwiperContainer">
                                    <Swipe for="wide" list={item.gallery} folder="menusT" />
                                </div>
                            </span>

                        )}
                    </span>
                } )}
                <div className="EventSwiperContainer">
                    <Swipe for="wide" list={EventImages} folder="sustainPhotos" />
                </div>
                <div className="guestChefs">
                    <h3>Engaged guest chefs</h3>
                    <div className="logo_slider">
                        <div className="slide-track">
                            {Collab.map( ( item, index ) => {
                                let img = `../images/event/logo/logo/${index}.png`;
                                return <div className="slide" key={index}>
                                    <img src={img} alt="" />
                                </div>
                            } )}
                            {Collab.map( ( item, index ) => {
                                let img = `../images/event/logo/logo/${index}.png`;
                                return <div className="slide" key={index}>
                                    <img src={img} alt="" />
                                </div>
                            } )}

                        </div>
                    </div>
                </div>
                <span>
                    {EventsList.map( ( item, index ) => {
                        let background = `../images/event/${item}`
                        return (
                            <span key={index}>
                                <div className='event_img'>
                                    <img src={background} alt="" />
                                </div>
                            </span>
                        );
                    } )}
                </span>
            </span>
        </span>
    );
}
export default Events