import { api } from "utils/api";
import * as ActionType from "./constants";

export const actFetchListUserApi = () => {
    return (dispatch) => {
        dispatch(actFetchListUserRequest());
        api.get("users/pagination?skip=0")
        .then((success)=>{
            dispatch(actFetchListUserSuccess(success.data));
        })
        .catch((error)=>{
            dispatch(actFetchListUserFailed(error));
        })
    }
} 
const actFetchListUserRequest = ()=>{
    return {
        type: ActionType.FETCH_LIST_USER_REQUEST
    }
}
const actFetchListUserSuccess = (data) => {
return {
    type: ActionType.FETCH_LIST_USER_SUCCESS,
    payload: data,
}
}
const actFetchListUserFailed = (error) => {
    return{
        type: ActionType.FETCH_LIST_USER_FAILED,
        payload: error,
    }
}

export const actDeleteUserApi = (_id) => {
    return (dispatch) => {
        dispatch(actDeleteUserRequest());
        api.delete(`users/${_id}`)
        .then((success)=>{
            dispatch(actDeleteUserSuccess(success.data));
            alert("Delete Successfully");
            window.location.reload(true);
        })
        .catch((error)=>{
            // console.log(error);
            dispatch(actDeleteUserFailed(error));
        })
    }
} 
const actDeleteUserRequest = ()=>{
    return {
        type: ActionType.DELETE_USER_REQUEST
    }
}
const actDeleteUserSuccess = (data) => {
return {
    type: ActionType.DELETE_USER_SUCCESS,
    payload: data,
}
}
const actDeleteUserFailed = (error) => {
    return{
        type: ActionType.DELETE_USER_FAILED,
        payload: error,
    }
}
