import * as ActionType from "./constants";

const initialState = {
  loading: false,
  error: null,
  editRoom: "",
};

const editRoomReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.EDIT_ROOM_REQUEST: {
      state.loading = true;
      state.editRoom = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.EDIT_ROOM_SUCCESS: {
      state.loading = false;
      state.editRoom = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.EDIT_ROOM_FAILED: {
      state.loading = false;
      state.editRoom = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default editRoomReducer;
