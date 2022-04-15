import * as ActionType from "./constants";

const initialState = {
  loading: false,
  error: null,
  editUser: "",
  detailUser: null,
};

const editUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.EDIT_USER_REQUEST: {
      state.loading = true;
      state.editUser = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.EDIT_USER_SUCCESS: {
      state.loading = false;
      state.editUser = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.EDIT_USER_FAILED: {
      state.loading = false;
      state.editUser = null;
      state.error = action.payload;
      return { ...state };
    }

    case ActionType.FETCH_DETAIL_USER_REQUEST: {
      state.loading = true;
      state.detailUser = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.FETCH_DETAIL_USER_SUCCESS: {
      state.loading = false;
      state.detailUser = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.FETCH_DETAIL_USER_FAILED: {
      state.loading = false;
      state.detailUser = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default editUserReducer;
