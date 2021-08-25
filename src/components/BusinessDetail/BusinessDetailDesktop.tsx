import './BusinessDetailDesktop.css'
import BusinessDetailWrapper from './BusinessDetailWrapper';
import { description, image, title } from './BusinessDetailMotion';
import { motion } from 'framer-motion';
import { Typography } from '@material-ui/core';
import { getFromRedux } from '../../redux/getFromRedux';
import { LandInfo } from '../../interfaces/LandInfo';
import Slider from "react-slick";

function showLands() {
    const lands: LandInfo[] = getFromRedux('ControlBusinessInfo')['lands']
    console.log(lands)
    return lands.map((land: LandInfo) => {
        return (
            <div key={land.address} >
                <motion.img 
                variants={image}
                alt="맵이미지" 
                className="description-image" 
                src={process.env.PUBLIC_URL+`/오향리320-1/${land.address}_airplaneview.png`}
                />
                <div className="detail_description">
                    <motion.h3 variants={title} className="detail_land_title">
                        {land.address}
                    </motion.h3>
                    <motion.p variants={description} >
                        건축면적 : {land.buildingArea}
                    </motion.p>
                    <motion.p variants={description} >
                        연면적 : {land.floorArea}
                    </motion.p>
                    <motion.p variants={description} >
                        건폐율 : {land.buildingToLandRatio}
                    </motion.p>
                    <motion.p variants={description} >
                        용적률 : {land.floorAreaRatio} <br/>
                    </motion.p>
                </div>
            </div>
        );
    })
}

export default function BusinessDetailDesktop() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };

    return (
        <BusinessDetailWrapper>
            <div className="detail-div">
                <motion.h1 variants={title}>
                    <Typography className="description_category">FACTORY</Typography>
                </motion.h1>
                <Slider {...settings}>
                    {showLands()}
                </Slider>
            </div>
        </BusinessDetailWrapper>
    );
}

