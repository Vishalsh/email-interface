import loadingStates from 'constants/loadingStates';
import {
  GET_EMAILS_SUCCESSFUL,
  GET_EMAILS_FAILED,
  DELETE_EMAILS_SUCCESSFUL
} from "./mailbox.actionTypes";

const initialState = {};

const mailboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMAILS_SUCCESSFUL:
    case DELETE_EMAILS_SUCCESSFUL: {
      const { mailbox, emails } = action.payload;

      return {
        ...state,
        [mailbox]: {
          emails,
          loadingState: loadingStates.LOADED
        }
      };
    }

    case GET_EMAILS_FAILED: {
      const { mailbox } = action.payload;

      return {
        ...state,
        [mailbox]: {
          emails: [],
          loadingState: loadingStates.FAILED
        }
      };
    }
    default:
      return state;
  }
};

export default mailboxReducer;
