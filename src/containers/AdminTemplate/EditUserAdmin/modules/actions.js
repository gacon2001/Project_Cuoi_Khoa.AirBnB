import * as ActionType from "./constants";
import { api } from "utils/api";

export const actEditUserApi = (_id, userUpdate) => {
    return (dispatch) => {
        dispatch(actEditUserRequest());
        api.put(`users/${_id}`, userUpdate) 
        .then((success)=>{
            dispatch(actEditUserSuccess(success.data));
            alert("Edit Successfully");
        })
        .catch((error)=>{
            // console.log(error);
            dispatch(actEditUserFailed(error));
            alert("'Failed");
        })
    }
} 
const actEditUserRequest = ()=>{
    return {
        type: ActionType.EDIT_USER_REQUEST
    }
}
const actEditUserSuccess = (data) => {
return {
    type: ActionType.EDIT_USER_SUCCESS,
    payload: data,
}
}
const actEditUserFailed = (error) => {
    return{
        type: ActionType.EDIT_USER_FAILED,
        payload: error,
    }
}

export const actFetchDetailUserApi = (_id) => {
    return (dispatch) => {
        dispatch(actFetchDetailUserRequest());
        api.get(`users/${_id}`)
        .then((success)=>{
            dispatch(actFetchDetailUserSuccess(success.data));
        })
        .catch((error)=>{
            dispatch(actFetchDetailUserFailed(error));
        })
    }
} 
const actFetchDetailUserRequest = ()=>{
    return {
        type: ActionType.FETCH_DETAIL_USER_REQUEST
    }
}
const actFetchDetailUserSuccess = (data) => {
return {
    type: ActionType.FETCH_DETAIL_USER_SUCCESS,
    payload: data,
}
}
const actFetchDetailUserFailed = (error) => {
    return{
        type: ActionType.FETCH_DETAIL_USER_FAILED,
        payload: error,
    }
}