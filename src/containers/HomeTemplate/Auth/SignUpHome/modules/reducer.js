import * as ActionType from "./constants";
const initalState = {
  loading: false,
  data: null,
  error: null,
};
const signUpReducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionType.SIGNUP_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.SIGNUP_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.SIGNUP_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default signUpReducer;
