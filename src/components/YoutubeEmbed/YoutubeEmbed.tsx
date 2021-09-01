import { motion } from "framer-motion";
import { image } from "../BusinessDetail/BusinessDetailMotion";
import "./YoutubeEmbed.css"

type Props = {
    embedId: string,
    width: string,
}

const YoutubeEmbed = ({ embedId, width }: Props) => (
    <motion.div variants={image} className="video-responsive" style={{width: width}}>
        <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder='0'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Embedded youtube"
        />
    </motion.div>
);

export default YoutubeEmbed;