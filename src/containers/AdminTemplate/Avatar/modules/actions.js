import api from "utils/api";
import * as ActionType from "./constants";

export const actUploadAvatarApi = (avatar) => {
  return (dispatch) => {
    dispatch(actUploadAvatarRequest());
    var formData = new FormData();
    formData.append("avatar", avatar);//(name: key postman, value: tham số mà mình nhận gtri truyền vô) //ko nhận jpeg, nhận jpg
    api
    //6
      .post("users/upload-avatar", formData)
      .then((success) => {
        const admin = JSON.parse(localStorage.getItem("Admin"));
        // admin.user.avatar = success.data.avatar; => Fiverr : đăng nhập vào thì . tới user r . tới avatar => lấy đc avatar của admin đăng nhập vào
        admin.user.avatar = success.data.avatar;//đăng nhập vào . user -> nhưng user ko có avatar
        localStorage.setItem("Admin", JSON.stringify(admin));
        window.location.reload();
        dispatch(actUploadAvatarSuccess(success.data));
      })
      .catch((error) => {
        dispatch(actUploadAvatarFailed(error));
      });
  };
};
const actUploadAvatarRequest = () => {
  return {
    type: ActionType.UPLOAD_AVATAR_REQUEST,
  };
};
const actUploadAvatarSuccess = (data) => {
  return {
    type: ActionType.UPLOAD_AVATAR_SUCCESS,
    payload: data,
  };
};
const actUploadAvatarFailed = (error) => {
  return {
    type: ActionType.UPLOAD_AVATAR_FAILED,
    payload: error,
  };
};

