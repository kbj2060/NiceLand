import { Swiper, SwiperSlide } from "swiper/react";
import { Button, Typography } from "@material-ui/core";
import SwiperCore, {Scrollbar, Pagination} from 'swiper/core';
import './IntroduceBusiness.css'
import './IntroduceBusinessCard.css'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { BusinessInfo } from "../../interfaces/BusinessInfo";
import {saveBusinessInfo} from "../../redux/modules/ControlBusinessInfo"

// install Swiper modules
SwiperCore.use([Scrollbar, Pagination]);


function IntroduceBusinessCard(props: BusinessInfo) {
    const dispatch = useDispatch();

    function handleOnClick() {
        dispatch(saveBusinessInfo(props))
    }

    return (
        <div className="intro_image-div">
            <a href={process.env.PUBLIC_URL + props.represent_picture} className="intro_image-div">
                <img alt="intro_image" src={process.env.PUBLIC_URL + props.represent_picture} />
            </a>
            <div className="description-div">
                <Typography className="description_category">{props.category}</Typography>
                <div className="address_date-div">
                    <p className="description">{props.address}</p>
                    <p className="description_date">{props.date}</p>
                </div>
                <Link to="/business_detail" className="more-button">
                    <Button variant="outlined" onClick={handleOnClick}>More</Button>
                </Link>
            </div>
        </div>
    );
}


export default function IntroduceBusiness() {
    const construction_info: BusinessInfo[] = require('../../constructions.json')

    function render_all_cards () {
        return Object.values(construction_info).map((info: BusinessInfo) => {
            return (
                <SwiperSlide key={info.address}>
                    <IntroduceBusinessCard  {...info} />
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

