import {
  ADD_EMAILS,
  UPDATE_EMAIL_STATUS_SUCCESSFUL
} from "./emails.actionTypes";
import { status } from 'constants/emails';

const initialState = {};

const emailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMAILS: {
      const { emails } = action.payload;

      return {
        ...state,
        ...emails
      };
    }

    case UPDATE_EMAIL_STATUS_SUCCESSFUL: {
      const { email } = action.payload;

      return {
        ...state,
        [email.id]: {
          ...email
        }
      };
    }

    default:
      return state;
  }
};

export default emailsReducer;
