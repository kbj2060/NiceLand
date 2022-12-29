import { motion } from "framer-motion";
import { image } from "../BusinessDetail/BusinessDetailMotion";
import "./YoutubeEmbed.css"
import YouTube, { Options } from 'react-youtube';


type Props = {
    embedId: string,
    width: string,
    isMobile: boolean
}



function _onReady(event: { target: { pauseVideo: () => void; }; }) {
// access to player in all event handlers via event.target
    event.target.pauseVideo();
}

const YoutubeEmbed = ({ embedId, width, isMobile }: Props) => {
    const opts: Options = {
        height: '100%',
        width: '100%',
        playerVars: {
        },
    };
    
    return (
    <motion.div variants={image} className={isMobile?"video-responsive-mobile":"video-responsive-desktop"} style={{width: width}}>
        {/* <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder='0'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Embedded youtube"
        /> */}
        <YouTube  videoId={embedId} opts={opts} onReady={_onReady} />
    </motion.div>
)};

export default YoutubeEmbed;