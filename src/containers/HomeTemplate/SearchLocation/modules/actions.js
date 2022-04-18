
import api from "utils/api";
import * as ActionType from "./constants";

export const actFetchListLocationApi = () => {
  return (dispatch) => {
    dispatch(actFetchListLocationRequest());
    api
    //9
      .get("locations?skip=1")
      .then((success) => {
        dispatch(actFetchListLocationSuccess(success.data));
      })
      .catch((error) => {
        dispatch(actFetchListLocationFailed(error));
      });
  };
};
const actFetchListLocationRequest = () => {
  return {
    type: ActionType.FETCH_LIST_LOCATION_REQUEST,
  };
};
const actFetchListLocationSuccess = (data) => {
  return {
    type: ActionType.FETCH_LIST_LOCATION_SUCCESS,
    payload: data,
  };
};
const actFetchListLocationFailed = (error) => {
  return {
    type: ActionType.FETCH_LIST_LOCATION_FAILED,
    payload: error,
  };
};

export const actDeleteLocationApi = (_id) => {
  return (dispatch) => {
      dispatch(actDeleteLocationRequest());
      //8
      api.delete(`locations/${_id}`)
      .then((success)=>{
          dispatch(actDeleteLocationSuccess(success.data));
          alert("Delete Successfully");
          window.location.reload(true);
      })
      .catch((error)=>{
          dispatch(actDeleteLocationFailed(error));
      })
  }
} 
const actDeleteLocationRequest = ()=>{
  return {
      type: ActionType.DELETE_LOCATION_REQUEST
  }
}
const actDeleteLocationSuccess = (data) => {
return {
  type: ActionType.DELETE_LOCATION_SUCCESS,
  payload: data,
}
}
const actDeleteLocationFailed = (error) => {
  return{
      type: ActionType.DELETE_LOCATION_FAILED,
      payload: error,
  }
}
