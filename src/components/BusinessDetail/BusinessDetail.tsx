import './BusinessDetail.css'
import BusinessDetailDesktop from './BusinessDetailDesktop';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import BusinessDetailMobile from './BusinessDetailMobile';
import { DSTGSH_DEVICE_WIDTH } from '../../enums';
import { useEffect } from 'react';

export default function BusinessDetail() {
    const width = useWindowDimensions();

    // useEffect(()=> {
    //     window.onbeforeunload = function () { window.scrollTo(0, 0); }
    // }, [])

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

