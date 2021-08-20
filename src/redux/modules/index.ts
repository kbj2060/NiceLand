import { combineReducers } from "redux";
import ControlBusinessInfo from "./ControlBusinessInfo";

const allReducers = combineReducers({
	ControlBusinessInfo: ControlBusinessInfo
});

export type RootState = ReturnType<typeof allReducers>

export default allReducers;



