import './BusinessDetailDesktop.css'
import BusinessDetailWrapper from './BusinessDetailWrapper';
import { description, image, title } from './BusinessDetailMotion';
import { motion } from 'framer-motion';
import { Typography } from '@material-ui/core';
import { LandInfo } from '../../interfaces/LandInfo';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import { BusinessInfo } from '../../interfaces/BusinessInfo';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';
import { store } from '../../redux/store';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
// import MotionIcon from '../../utils/MotionIcon';


function showLands(businessInfo: BusinessInfo) {
    const lands: LandInfo[] = businessInfo['lands']

    return lands.map((land: LandInfo) => {
        return (
            <SwiperSlide key={land.address} id="description-slide-desktop" >
                <div id="detail_description-desktop">
                    <motion.img 
                        variants={image}
                        alt="맵이미지" 
                        src={process.env.PUBLIC_URL+`/${businessInfo.project_name}/${land.address}_airplaneview.png`}
                        />
                    <div>
                        <p id="description_address-desktop" >{land.address}</p>
                        <motion.p variants={description} >
                            부지 : {land.size}
                        </motion.p>
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
                            용적률 : {land.floorAreaRatio}
                        </motion.p>
                    </div>
                </div>
            </SwiperSlide>
        );
    })
}

export default function BusinessDetailDesktop() {
    const businessInfo: BusinessInfo = store.getState().ControlBusinessInfo

    return (
        <BusinessDetailWrapper>
            <div id="detail-div-desktop">
                <motion.h1 variants={title}>
                    <Typography id="detail_category-desktop">{businessInfo.category}</Typography>
                </motion.h1>
                
                {/* <MotionIcon/> */}

                <motion.div id="lands-and-video-div" variants={title}>
                    <motion.h1 variants={title}>
                        <Typography id="description_title-motion-desktop">LANDS</Typography>
                    </motion.h1>
                    <motion.div id="swiper-navigation-desktop" variants={title}>
                        <IconButton >
                            <ArrowBackIosIcon className="custom_prev" />
                        </IconButton>
                        <Swiper id="swiper-desktop" navigation={{
                            nextEl: ".custom_next",
                            prevEl: ".custom_prev"
                            }} >
                            {showLands(businessInfo)}
                        </Swiper>
                        <IconButton >
                            <ArrowForwardIosIcon className="custom_next" />
                        </IconButton>
                    </motion.div>
                    
                    <motion.h1 variants={title} >
                        <Typography id="description_title-motion-desktop">VIDEO</Typography>
                    </motion.h1>
                    <YoutubeEmbed embedId={businessInfo.youtubeId} width="80%" isMobile={false}/>
                </motion.div>

            </div>
        </BusinessDetailWrapper>
    );
}