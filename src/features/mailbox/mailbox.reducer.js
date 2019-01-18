import loadingStates from 'constants/loadingStates';
import {
  GET_EMAILS_SUCCESSFUL,
  GET_EMAILS_FAILED,
  DELETE_EMAILS_SUCCESSFUL,
  ADD_EMAIL_TO_MAILBOX
} from "./mailbox.actionTypes";
import { INBOX, SENT, TRASH } from 'constants/mailbox';

const initialState = {
  [INBOX]: {
    emails: [],
    loadingStates: loadingStates.AT_REST
  },
  [SENT]: {
    emails: [],
    loadingStates: loadingStates.AT_REST
  },
  [TRASH]: {
    emails: [],
    loadingStates: loadingStates.AT_REST
  }
};

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

    case ADD_EMAIL_TO_MAILBOX: {
      const { mailbox, id } = action.payload;

      return {
        ...state,
        [mailbox]: {
          emails: [id, ...state[mailbox].emails],
          loadingState: loadingStates.LOADED
        }
      };
    }
    default:
      return state;
  }
};

export default mailboxReducer;
