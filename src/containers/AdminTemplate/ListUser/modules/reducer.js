import * as ActionType from "./constants";

const initialState = {
  loading: false,
  listUser: [],
  error: null,
};

const fetchListUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_LIST_USER_REQUEST:
      state.loading = true;
      // state.listUser = null;
      state.error = null;
      return { ...state };
    case ActionType.FETCH_LIST_USER_SUCCESS:
      state.loading = false;
      state.listUser = action.payload;
      state.error = null;
      return { ...state };
    case ActionType.FETCH_LIST_USER_FAILED:
      state.loading = false;
      // state.listUser = null;
      state.error = action.payload;
      return { ...state };

    case ActionType.DELETE_USER_REQUEST:
      state.loading = true;
      //   state.listUser = null;
      state.error = null;
      return { ...state };
    case ActionType.DELETE_USER_SUCCESS: {
      let listUser = { ...state.listUser };
      const index = state.listUser.findIndex((user) => {
        return user._id === action.payload;
      });
      if (index != -1) {
        listUser.splice(index, 1);
        state.listUser = listUser;
      }
      return { ...state };
    }
    case ActionType.DELETE_USER_FAILED:
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default fetchListUserReducer;
