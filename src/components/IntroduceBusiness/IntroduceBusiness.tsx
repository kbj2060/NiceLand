import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "@material-ui/core";
import SwiperCore, {Navigation} from 'swiper/core';
import './IntroduceBusiness.css'
import './IntroduceBusinessCard.css'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// install Swiper modules
SwiperCore.use([Navigation]);

interface CardInfo {
    address : string,
    status : string,
    price : string,
    date : string,
    picture : string
}

function IntroduceBusinessCard(props: CardInfo) {
    return (
        <div className="introduce_business_card_root">
            <img alt="intro_image" src={process.env.PUBLIC_URL + props.picture} />
        </div>
    );
}


export default function IntroduceBusiness() {
    const construction_info: CardInfo = require('../../constructions.json')
    console.log(construction_info)

    function render_all_cards () {
        return Object.values(construction_info).map((info) => {
            return (
                <SwiperSlide>
                    <IntroduceBusinessCard key={info.address} {...info} />
                </SwiperSlide>
            )
        })
    }

    return (
        <div className="introduce_business_root">
            <div className="title-div">
                <Typography className="title">PROJECTS</Typography>
            </div>
            <Swiper navigation={true} className="business-swiper">
                {render_all_cards()}
            </Swiper>
        </div>
    );
}

