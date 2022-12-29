import { motion } from "framer-motion";
import { DSTGSH_DEVICE_WIDTH } from "../../enums";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Transition from "../Transition/Transition";
import "./IntroduceCompany.css"
import { leftArticle, rightArticle } from "./IntroduceCompanyMotion";

export default function IntroduceCompany() {
    const width = useWindowDimensions();

    return (
        <motion.div 
            initial="initial"
            animate="animate" 
            id={width>= DSTGSH_DEVICE_WIDTH ? "introduce_company_root-desktop": "introduce_company_root-mobile"}
            >
            <Transition />
            <div id={width>= DSTGSH_DEVICE_WIDTH ?"background_image-div-desktop": "background_image-div-mobile"}>
                <img alt="intro_company_background" id="background_image" src={process.env.PUBLIC_URL+"/intro_company_background.png"} />
            </div>

            <motion.div  variants={leftArticle} id="leftArticle">
                <motion.h1>1. FUNDAMENTAL </motion.h1>
                <p>작은 일도 무시하지 않고 <br/>기본에 최선을 다합니다.</p>
            </motion.div>
                
            <motion.div variants={rightArticle} id="rightArticle">
                <motion.h1 >2. REASONABLE </motion.h1>
                <motion.p>효율적인 경영으로 <br/>합리적인 가격을 제시합니다.</motion.p>
            </motion.div>

            <motion.div variants={leftArticle} id="leftArticle">
                <motion.h1 >3. ATTRACTIVE </motion.h1>
                <p>차별된 디자인으로 <br/>매력적인 상품을 개발합니다.</p>
            </motion.div>

        </motion.div>
    );
}