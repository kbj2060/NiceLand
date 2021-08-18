import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './IntroduceBusiness.css'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import { Typography } from "@material-ui/core";
import SwiperCore, {Navigation} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);

export default function IntroduceBusiness() {
    return (
        <div className="introduce_business_root">
            <Typography className="title">사업소개</Typography>
            <Swiper navigation={true} className="business-swiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </div>
    );
}

