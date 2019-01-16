import {
  ADD_EMAILS,
} from "./emails.actionTypes";

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
    default:
      return state;
  }
};

export default emailsReducer;
