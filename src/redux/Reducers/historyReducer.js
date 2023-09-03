
import { HISTORY_DATA, HISTORY_UPDATE } from "../Actions/actionTypes"


const historyReducer = (state=[], action) =>{
    switch(action.type){
        case HISTORY_DATA: return [action.payload];
        case HISTORY_UPDATE:
            let a = [...state];
            a.push(action.payload);
            return a;

        default: return state;
    }
}

export default historyReducer;