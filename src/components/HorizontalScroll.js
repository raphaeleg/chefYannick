import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import img from "../images/menus/cafe-des.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";

// import required modules
import { Pagination, Navigation } from "swiper";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState( getWindowDimensions() );

    useEffect( () => {
        function handleResize() {
            setWindowDimensions( getWindowDimensions() );
        }

        window.addEventListener( 'resize', handleResize );
        return () => window.removeEventListener( 'resize', handleResize );
    }, [] );

    return windowDimensions;
}

const HorizontalScroll = ( props ) => {
    const { height, width } = useWindowDimensions();

    return (
        <>
            <Swiper
                slidesPerView={width > 1300 ? ( 3 ) : ( width > 900 ? 2 : 1 )}
                spaceBetween={width > 1300 ? ( 50 ) : ( width > 900 ? 50 : 200 )}
                slidesPerGroup={width > 1300 ? ( 3 ) : ( width > 900 ? 2 : 1 )}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {props.list.map( ( dish, index ) => {
                    const dishImg = {
                        backgroundImage: `url(../images/menus/${dish.img})`,
                    };
                    return <SwiperSlide>
                        <span className="menu_dish">
                            <div className="menu_dish_img" style={dishImg}></div>
                            <h5>{dish.name}</h5>
                            {dish.desc != null ?
                                dish.desc.map( ( dishDesc, index ) => {
                                    return <p className="menu_dish_desc">{dishDesc}</p>
                                } )
                                : null}
                        </span>
                    </SwiperSlide>
                } )
                }
            </Swiper>
        </>
    );
}

export default HorizontalScroll;