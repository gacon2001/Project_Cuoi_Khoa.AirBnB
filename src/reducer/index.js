import { combineReducers } from "redux";
import signinAdminReducer from "containers/AdminTemplate/SignInAd/modules/reducer";
import uploadAvatarReducer from "containers/AdminTemplate/Avatar/modules/reducer";
import editUserReducer from "containers/AdminTemplate/EditUserAdmin/modules/reducer";
import fetchListUserReducer from "containers/AdminTemplate/ListUser/modules/reducer";
import addUserReducer from "containers/AdminTemplate/AddUserAdmin/modules/reducer";

const rootReducer = combineReducers({
    signinAdminReducer,
    uploadAvatarReducer,
    editUserReducer,
    fetchListUserReducer,
    addUserReducer,
    

});
export default rootReducer;