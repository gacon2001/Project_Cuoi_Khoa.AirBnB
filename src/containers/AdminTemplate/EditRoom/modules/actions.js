import * as ActionType from "./constants";
import api from "utils/api";

export const actEditRoomApi = (_id, roomUpdate, history) => {
    return (dispatch) => {
        dispatch(actEditRoomRequest());
        api.put(`rooms/${_id}`, roomUpdate) 
        .then((success)=>{
            dispatch(actEditRoomSuccess(success.data));
            alert("Edit Successfully");
            // history.push(`/list-rooms/${roomUpdate.locationId.}`)
        })
        .catch((error)=>{
            dispatch(actEditRoomFailed(error));
            alert("'Failed");
        })
    }
} 
const actEditRoomRequest = ()=>{
    return {
        type: ActionType.EDIT_ROOM_REQUEST
    }
}
const actEditRoomSuccess = (data) => {
return {
    type: ActionType.EDIT_ROOM_SUCCESS,
    payload: data,
}
}
const actEditRoomFailed = (error) => {
    return{
        type: ActionType.EDIT_ROOM_FAILED,
        payload: error,
    }
}
