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
import { description, image, title } from "../BusinessDetail/BusinessDetailMotion";
import { motion } from "framer-motion";

// install Swiper modules
SwiperCore.use([Scrollbar, Pagination]);


function IntroduceBusinessCard(props: BusinessInfo) {
    const dispatch = useDispatch();

    function handleOnClick() {
        dispatch(saveBusinessInfo(props))
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            className="intro_image-div" >
            <motion.img 
                variants={image}
                alt="intro_image" 
                src={process.env.PUBLIC_URL + props.represent_picture} />
            <div className="description-div">
                <motion.p  variants={title} className="description_category">{props.category}</motion.p>
                <div>
                    <motion.p variants={description} >{props.address}</motion.p>
                    <motion.p variants={description} >{props.date}</motion.p>
                </div>
                <motion.div variants={description} >
                    <Link to={process.env.PUBLIC_URL + "/business_detail"} className="more-button">
                        <Button variant="outlined" onClick={handleOnClick}  >More</Button>
                    </Link>
                </motion.div>
            </div>
        </motion.div>
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

