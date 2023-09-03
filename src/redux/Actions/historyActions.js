

import { HISTORY_DATA,HISTORY_UPDATE } from "./actionTypes"

export const historyData = (data) =>{
    return {
        type:HISTORY_DATA,
        payload:data
    }
}

export const historyUpdate = (data) =>{
    return {
        type:HISTORY_UPDATE,
        payload:data
    }
}
