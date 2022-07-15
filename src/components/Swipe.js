import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Swipe = ( props ) => {
    var autoplayVar = {}
    var modulesVar = [Pagination, Navigation];

    if ( props.for === "wide" ) {
        autoplayVar = {
            delay: 4500,
            disableOnInteraction: false,

        }
        modulesVar = [Autoplay, Pagination, Navigation];
    }

    return (
        <>
            <Swiper
                spaceBetween={1000}
                centeredSlides={true}
                autoplay={autoplayVar}
                pagination={{
                    clickable: false,
                }}
                navigation={true}
                modules={modulesVar}
                className="mySwiper"
            >
                {props.for === "wide" ? (
                    props.list.map( ( imgpath, idx ) => {
                        const img = `../images/${props.folder}/${imgpath}`;

                        return (
                            <SwiperSlide key={`${idx}`} className={"swiper-slide"}>
                                <img className={"swiper-img-sustain"} src={img} alt="event images" />
                            </SwiperSlide>
                        );
                    } )
                ) : (
                    props.idx.map( ( imgpath, idx ) => {
                        const img = `../images/healthPhotos/${imgpath}`;

                        return (
                            <SwiperSlide key={`${idx}`} className={"swiper-slide"}>
                                <img className={"swiper-img-health"} src={img} alt="event images" />
                            </SwiperSlide>
                        );
                    } )
                )}
            </Swiper>
        </>
    );
}
export default Swipe;