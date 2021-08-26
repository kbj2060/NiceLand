import { BusinessInfo } from "../../interfaces/BusinessInfo";
import { getFromLocalStorage } from "../../utils/getFromLocalStorage";

const SAVE_BUSINESS_INFO = "SAVE_BUSINESS_INFO";

export function saveBusinessInfo(info: BusinessInfo) {
    return { type: SAVE_BUSINESS_INFO, info }
}

export interface actionTypes {
    type: "SAVE_BUSINESS_INFO";
    info: BusinessInfo;
}

const initialState: BusinessInfo = getFromLocalStorage('persist:root', 'ControlBusinessInfo')

function ControlBusinessInfo(
    state =initialState, action: actionTypes
) {
    switch(action.type){
        case SAVE_BUSINESS_INFO:
            const info = action.info as BusinessInfo;
            return info;

        default:
            return state
    }
}

export default ControlBusinessInfo;