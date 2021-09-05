import { BusinessInfo } from "../../interfaces/BusinessInfo";
import { LandInfo } from "../../interfaces/LandInfo";
import { getFromLocalStorage } from "../../utils/getFromLocalStorage";
import { setLocalStorage } from "../../utils/setLocalStorage";

const SAVE_BUSINESS_INFO = "SAVE_BUSINESS_INFO";

export function saveBusinessInfo(info: BusinessInfo) {
    return { type: SAVE_BUSINESS_INFO, info }
}

export interface actionTypes {
    type: typeof SAVE_BUSINESS_INFO;
    info: BusinessInfo;
}

const defaultLandInfo: LandInfo = {
    address:"",
    owner : "",
    buildingArea :"",
    floorArea : "",
    siteArea: "",
    buildingToLandRatio: "",
    floorAreaRatio: "",
    size: "",
}

const defaultState: BusinessInfo = {
    project_name : "",
    address : "",
    status : "",
    price : "",
    date : "",
    represent_picture : "",
    category : "",
    youtubeId: "",
    lands: [defaultLandInfo]
}

const initialState: BusinessInfo = getFromLocalStorage('ControlBusinessInfo') || defaultState;

function ControlBusinessInfo(
    state =initialState, action: actionTypes
) {
    switch(action.type){
        case SAVE_BUSINESS_INFO:
            setLocalStorage('ControlBusinessInfo', action.info);
            return action.info as BusinessInfo;
        default:
            return state
    }
}

export default ControlBusinessInfo;
