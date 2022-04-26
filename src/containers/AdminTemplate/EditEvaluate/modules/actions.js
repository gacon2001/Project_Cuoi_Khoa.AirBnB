import * as ActionType from "./constants";
import { api } from "utils/api";

export const actEditEvaluateApi = (_id, evaluateUpdate, history) => {
    return (dispatch) => {
        dispatch(actEditEvaluateRequest());
        api
        //27
        .put(`reviews/${_id}`, evaluateUpdate) 
        .then((success)=>{
            dispatch(actEditEvaluateSuccess(success.data));
            alert("Edit Successfully");
            history.push(`/detail-room-admin/${evaluateUpdate.roomId._id}`)
        })
        .catch((error)=>{
            dispatch(actEditEvaluateFailed(error));
            alert("'Failed");
        })
    }
} 
const actEditEvaluateRequest = ()=>{
    return {
        type: ActionType.EDIT_EVALUATE_REQUEST
    }
}
const actEditEvaluateSuccess = (data) => {
return {
    type: ActionType.EDIT_EVALUATE_SUCCESS,
    payload: data,
}
}
const actEditEvaluateFailed = (error) => {
    return{
        type: ActionType.EDIT_EVALUATE_FAILED,
        payload: error,
    }
}

export const actFetchDetailEvaluateApi = (_id) => {
    return (dispatch) => {
        dispatch(actFetchDetailEvaluateRequest());
        api
        //26
        .get(`reviews/${_id}`)
        .then((success)=>{
            dispatch(actFetchDetailEvaluateSuccess(success.data));
        })
        .catch((error)=>{
            dispatch(actFetchDetailEvaluateFailed(error));
        })
    }
} 
const actFetchDetailEvaluateRequest = ()=>{
    return {
        type: ActionType.FETCH_DETAIL_EVALUATE_REQUEST
    }
}
const actFetchDetailEvaluateSuccess = (data) => {
return {
    type: ActionType.FETCH_DETAIL_EVALUATE_SUCCESS,
    payload: data,
}
}
const actFetchDetailEvaluateFailed = (error) => {
    return{
        type: ActionType.FETCH_DETAIL_EVALUATE_FAILED,
        payload: error,
    }
}