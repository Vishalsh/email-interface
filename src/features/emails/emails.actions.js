import { createAction } from 'redux-actions';

import { status } from 'constants/emails';
import http from 'utilities/http';
import apiEndPoints from 'constants/apiEndPoints';
import { SENT } from 'constants/mailbox';
import {
  ADD_EMAILS,
  UPDATE_EMAIL_STATUS_SUCCESSFUL,
  TOGGLE_EMAIL_SELECTION,
  CLEAR_SELECTED_EMAILS,
  TOGGLE_CREATE_EMAIL_POPUP
} from "./emails.actionTypes";
import mailboxActions from "features/mailbox/mailbox.actions";

const addEmails = createAction(ADD_EMAILS);
const updateEmailStatusSuccessful = createAction(UPDATE_EMAIL_STATUS_SUCCESSFUL);
const toggleEmailSelection = createAction(TOGGLE_EMAIL_SELECTION);
const clearSelectedEmails = createAction(CLEAR_SELECTED_EMAILS);
const toggleCreateEmailPopup = createAction(TOGGLE_CREATE_EMAIL_POPUP);

const updateEmailStatus = (email) => (dispatch) => {
  const updatedEmail = { ...email, status: status.READ };

  return http.put(apiEndPoints.updateEmail(email.id), updatedEmail)
    .then(() => {
      dispatch(updateEmailStatusSuccessful({ email: updatedEmail }))
    })
    .catch(() => {
      window.alert('Something went wrong while updating the email status. Please try again');
    });
};

const sendEmail = (email) => (dispatch, getState) => {
  const senderEmail = getState().user.data.email;

  return http.post(apiEndPoints.sendEmail(), { ...email, from: senderEmail })
    .then((email) => {
      dispatch(addEmails({
        emails: {
          [email.id]: email
        }
      }));
      dispatch(mailboxActions.addEmailToMailbox({ mailbox: SENT, id: email.id }));
      dispatch(toggleCreateEmailPopup());
      window.alert('Email sent successfully');
    })
    .catch(() => {
      window.alert('Something went wrong while sending the email. Please try again');
    });
};

export default {
  addEmails,
  updateEmailStatus,
  toggleEmailSelection,
  clearSelectedEmails,
  sendEmail,
  toggleCreateEmailPopup
};
