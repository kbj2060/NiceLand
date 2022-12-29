import { motion } from 'framer-motion';
import './BusinessDetail.css'

type Props = {
    children: JSX.Element,
};

export default function BusinessDetailWrapper({children}: Props) {    
    return (
        <motion.section exit={{ opacity: 0 }}>
            <motion.div
                initial="initial"
                animate="animate"
            >
                {children}
            </motion.div>
        </motion.section>
    );
}

