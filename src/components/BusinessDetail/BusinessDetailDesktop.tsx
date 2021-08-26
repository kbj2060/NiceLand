import './BusinessDetailDesktop.css'
import BusinessDetailWrapper from './BusinessDetailWrapper';
import { description, image, title } from './BusinessDetailMotion';
import { motion } from 'framer-motion';
import { Typography } from '@material-ui/core';
import { getFromRedux } from '../../redux/getFromRedux';
import { LandInfo } from '../../interfaces/LandInfo';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Scrollbar, Pagination} from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import ModelWrapper from '../ModelWrapper';
import { BusinessInfo } from '../../interfaces/BusinessInfo';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';

SwiperCore.use([Scrollbar, Pagination]);


function showLands(businessInfo: BusinessInfo) {
    const lands: LandInfo[] = businessInfo['lands']

    return lands.map((land: LandInfo) => {
        return (
            <SwiperSlide key={land.address} className="description-slide" >
                <p>{land.address}</p>
                <div className="detail_description">
                    <motion.img 
                        variants={image}
                        alt="맵이미지" 
                        src={process.env.PUBLIC_URL+`/${businessInfo.project_name}/${land.address}_airplaneview.png`}
                        />
                    <div>
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
    const businessInfo: BusinessInfo = getFromRedux('ControlBusinessInfo')
    
    return (
        <BusinessDetailWrapper>
            <div className="detail-div">
                <motion.h1 variants={title}>
                    <Typography className="detail_category">FACTORY</Typography>
                </motion.h1>
                <ModelWrapper path={`/${businessInfo.project_name}/${businessInfo.project_name}.glb`} />

                <motion.h1 variants={title} className="description_title-motion">
                    <Typography >LANDS</Typography>
                </motion.h1>
                <Swiper scrollbar={{ draggable: true }} pagination={{ clickable: true }}>
                    {showLands(businessInfo)}
                </Swiper>

                <motion.h1 variants={title} className="description_title-motion">
                    <Typography >VIDEO</Typography>
                </motion.h1>
                <YoutubeEmbed embedId="rokGy0huYEA" />
            </div>
        </BusinessDetailWrapper>
    );
}

