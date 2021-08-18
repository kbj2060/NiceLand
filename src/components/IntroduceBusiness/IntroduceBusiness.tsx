import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography } from "@material-ui/core";
import SwiperCore, {Scrollbar, Pagination} from 'swiper/core';
import './IntroduceBusiness.css'
import './IntroduceBusinessCard.css'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// install Swiper modules
SwiperCore.use([Scrollbar, Pagination]);

interface CardInfo {
    address : string,
    status : string,
    price : string,
    date : string,
    picture : string,
    size : string
}

function IntroduceBusinessCard(props: CardInfo) {
    return (
        <div className="intro_image-div">
            <a href={process.env.PUBLIC_URL + props.picture}>
                <img alt="intro_image" src={process.env.PUBLIC_URL + props.picture} />
            </a>
            <div className="description-div">
                <p>주소 : {props.address}</p>
                <p>토지 크기 : {props.size}</p>
                <p>상태 : {props.status}</p>
                <p>마지막 업데이트 : {props.date}</p>
            </div>
        </div>
    );
}


export default function IntroduceBusiness() {
    const construction_info: CardInfo = require('../../constructions.json')

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
            <Swiper scrollbar={{ draggable: true }} pagination={{ clickable: true }}>
                {render_all_cards()}
            </Swiper>
        </div>
    );
}

