import {
  ADD_EMAILS,
  UPDATE_EMAIL_STATUS_SUCCESSFUL,
  TOGGLE_EMAIL_SELECTION,
  CLEAR_SELECTED_EMAILS,
  TOGGLE_CREATE_EMAIL_POPUP
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

    case UPDATE_EMAIL_STATUS_SUCCESSFUL: {
      const { email } = action.payload;

      return {
        ...state,
        [email.id]: {
          ...email
        }
      };
    }

    case TOGGLE_EMAIL_SELECTION: {
      const { id, checked } = action.payload;

      if (checked) {
        const selectedEmails = state.selectedEmails ? state.selectedEmails : [];

        return {
          ...state,
          selectedEmails: [...selectedEmails, id]
        }
      } else {
        const selectedEmailsCopy = [...state.selectedEmails];
        const selectedEmailIndex = state.selectedEmails.indexOf(id);
        selectedEmailsCopy.splice(selectedEmailIndex, 1);

        return {
          ...state,
          selectedEmails: selectedEmailsCopy
        }
      }
    }

    case CLEAR_SELECTED_EMAILS: {
      return {
        ...state,
        selectedEmails: []
      }
    }

    case TOGGLE_CREATE_EMAIL_POPUP: {
      return {
        ...state,
        isCreateEmailPopupOpen: !state.isCreateEmailPopupOpen
      }
    }

    default:
      return state;
  }
};

export default emailsReducer;
