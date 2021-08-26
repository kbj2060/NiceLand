import { LandInfo } from "./LandInfo";

export type BusinessInfo = {
    project_name : string,
    address : string,
    status : string,
    price : string,
    date : string,
    lands : LandInfo[],
    represent_picture : string,
    size : string,
    category : string
}