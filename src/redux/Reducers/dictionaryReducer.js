
import { DICTIONARY_LOADING,DICTIONARY_SUCCESS,DICTIONARY_ERROR } from "../Actions/actionTypes"

const initialState = {
    loading:false,
    error:false,
    data:[]
}

const dictionaryReducer = (state=initialState,action)=>{
    switch(action.type){
        case DICTIONARY_LOADING:return {...state,loading:true}
        case DICTIONARY_SUCCESS:return {...state,loading:false,data:action.payload}
        case DICTIONARY_ERROR:return {...state,loading:false, error:action.payload}
        default: return state;
    }   
}

export default dictionaryReducer;