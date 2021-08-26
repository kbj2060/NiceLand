import Transition from '../Transition/Transition';
import { motion } from 'framer-motion';
import {content} from './BusinessDetailMotion'
import './BusinessDetail.css'

type Props = {
    children: JSX.Element,
};

export default function BusinessDetailWrapper({children}: Props) {    
    return (
        <motion.section exit={{ opacity: 0 }}>
            <Transition />
            <motion.div
                initial="initial"
                animate="animate"
                variants={content}
            >
                {children}
            </motion.div>
        </motion.section>
    );
}

