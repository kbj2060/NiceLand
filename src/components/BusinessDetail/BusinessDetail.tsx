import './BusinessDetail.css'
import useWindowDimensions from '../../hooks/useWindowDimensions';
import BusinessDetailDesktop from './BusinessDetailDesktop';
import BusinessDetailMobile from './BusinessDetailMobile';
import { DSTGSH_DEVICE_WIDTH } from '../../enums';

export default function BusinessDetail() {
    const width = useWindowDimensions();

    return (
        <>
        { 
            width >= DSTGSH_DEVICE_WIDTH
            ? <><BusinessDetailDesktop /></>
            : <><BusinessDetailMobile /></> 
        }
        </>
    );
}

