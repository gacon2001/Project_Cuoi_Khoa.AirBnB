import { combineReducers } from "redux";
import signinAdminReducer from "containers/AdminTemplate/SignInAd/modules/reducer";
import uploadAvatarReducer from "containers/AdminTemplate/Avatar/modules/reducer";
import editUserReducer from "containers/AdminTemplate/EditUserAdmin/modules/reducer";
import fetchListUserReducer from "containers/AdminTemplate/ListUser/modules/reducer";
import addUserReducer from "containers/AdminTemplate/AddUserAdmin/modules/reducer";
import fetchListLocationReducer from "containers/HomeTemplate/SearchLocation/modules/reducer";
import fetchDetailLocationReducer from "containers/HomeTemplate/DetailLocation/modules/reducer";
import fetchListRoomsForRentByIDReducer from "containers/HomeTemplate/ListRoomsForRentByID/modules/reducer";

const rootReducer = combineReducers({
    signinAdminReducer,
    uploadAvatarReducer,
    editUserReducer,
    fetchListUserReducer,
    addUserReducer,
    fetchListLocationReducer,
    fetchDetailLocationReducer,
    fetchListRoomsForRentByIDReducer,

});
export default rootReducer;