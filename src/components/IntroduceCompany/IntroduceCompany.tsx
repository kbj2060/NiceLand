import { DSTGSH_DEVICE_WIDTH } from "../../enums";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./IntroduceCompany.css"

export default function IntroduceCompany() {
    const width = useWindowDimensions();

    return (
        <div id={width>= DSTGSH_DEVICE_WIDTH ? "introduce_company_root-desktop": "introduce_company_root-mobile"}>
            <div id={width>= DSTGSH_DEVICE_WIDTH ?"background_image-div-desktop": "background_image-div-mobile"}>
                <img id="background_image" src={process.env.PUBLIC_URL+"/intro_company_background.png"} />
            </div>
        </div>
    );
}