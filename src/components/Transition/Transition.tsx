import './Transition.css'
import { motion } from 'framer-motion';


const blackBox = {
    initial: {
        height: "100vh",
        bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChild ren",
        duration: 0.3,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

const textContainer = {
    initial: {
        opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
  };

const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 80,
      transition: {
        duration: 0.3,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

export default function Transition() {
    return (
        <motion.div
        className="transition-div"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
            document.body.classList.remove("overflow-hidden")
        }
        >
            <motion.svg variants={textContainer} className="transition-svg">
                <pattern
                    id="pattern"
                    patternUnits="userSpaceOnUse"
                    width={750}
                    height={800}
                    className="transition-text"
                >
                    <rect className="transition-rect" />
                    <motion.rect variants={text} className="transition_motion-rect" />
                </pattern>
                <text
                    className="transition-text"
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                    style={{ fill: "url(#pattern)" }}
                >
                    NICELAND
                </text>
            </motion.svg>
        </motion.div>
    );
}

