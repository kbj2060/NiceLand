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
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </motion.div>
);

export default YoutubeEmbed;