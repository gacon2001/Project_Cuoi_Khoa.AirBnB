import * as ActionType from "./constants";

const initialState = {
  loading: false,
  error: null,
  imageRoom: "",
  imageLocation: "",
  evaluate: "",
};

const uploadImageReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.UPLOAD_IMAGE_ROOM_REQUEST: {
      state.loading = true;
      state.imageRoom = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.UPLOAD_IMAGE_ROOM_SUCCESS: {
      state.loading = false;
      state.imageRoom = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.UPLOAD_IMAGE_ROOM_FAILED: {
      state.loading = false;
      state.imageRoom = null;
      state.error = action.payload;
      return { ...state };
    }

    case ActionType.UPLOAD_IMAGE_LOCATION_REQUEST: {
      state.loading = true;
      state.imageLocation = null;
      state.error = null;
      return { ...state };
    }

    case ActionType.UPLOAD_IMAGE_LOCATION_SUCCESS: {
      state.loading = false;
      state.imageLocation = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.UPLOAD_IMAGE_LOCATION_FAILED: {
      state.loading = false;
      state.imageLocation = null;
      state.error = action.payload;
      return { ...state };
    }


    default:
      return { ...state };
  }
};

export default uploadImageReducer;
