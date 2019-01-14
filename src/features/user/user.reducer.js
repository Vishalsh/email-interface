import loadingStates from 'constants/loadingStates';

import {
  USER_LOGIN_SUCCESSFUL,
  USER_LOGIN_FAILED
} from "./user.actionTypes";

const initialState = {
  loadingState: loadingStates.AT_REST,
  data: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESSFUL: {
      return {
        ...state,
        loadingState: loadingStates.LOADED,
        data: action.payload
      };
    }
    case USER_LOGIN_FAILED: {
      return {
        ...state,
        loadingState: loadingStates.FAILED
      };
    }
    default:
      return state;
  }
};

export default user;
