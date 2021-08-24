import Transition from '../Transition/Transition';
import { motion } from 'framer-motion';
import './BusinessDetail.css'

const content = {
    animate: {
        transition: { staggerChildren: 0.1, delayChildren: 1.8 },
    },
};

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

