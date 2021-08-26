import './BusinessDetail.css'
import BusinessDetailDesktop from './BusinessDetailDesktop';
// import useWindowDimensions from '../../hooks/useWindowDimensions';
// import BusinessDetailMobile from './BusinessDetailMobile';
// import { DSTGSH_DEVICE_WIDTH } from '../../enums';

export default function BusinessDetail() {
    // const width = useWindowDimensions();

    return (
        <>
        <><BusinessDetailDesktop /></>
        {/* { 
            width >= DSTGSH_DEVICE_WIDTH
            ? <><BusinessDetailDesktop /></>
            : <><BusinessDetailMobile /></> 
        } */}
        </>
    );
}

