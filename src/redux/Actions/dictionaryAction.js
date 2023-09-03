
import { DICTIONARY_LOADING,DICTIONARY_SUCCESS,DICTIONARY_ERROR } from "./actionTypes"

export const dictLoading = (data)=>{
    return {
        type:DICTIONARY_LOADING,
        payload:data
    }
}
export const dictSuccess = (data)=>{
    return {
        type:DICTIONARY_SUCCESS,
        payload:data
    }
}
export const dictError = (data)=>{
    return {
        type:DICTIONARY_ERROR,
        payload:data
    }
}