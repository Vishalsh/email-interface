import { createAction } from 'redux-actions';

import { status } from 'constants/emails';
import http from 'utilities/http';
import apiEndPoints from 'constants/apiEndPoints';
import {
  ADD_EMAILS,
  UPDATE_EMAIL_STATUS_SUCCESSFUL
} from "./emails.actionTypes";

const addEmails = createAction(ADD_EMAILS);
const updateEmailStatusSuccessful = createAction(UPDATE_EMAIL_STATUS_SUCCESSFUL);

const updateEmailStatus = (email) => (dispatch) => {
  const updatedEmail = { ...email, status: status.READ };

  return http.put(apiEndPoints.updateEmail(email.id), updatedEmail)
    .then(() => {
      dispatch(updateEmailStatusSuccessful({ email: updatedEmail }))
    })
    .catch(() => {
    });
};

export default {
  addEmails,
  updateEmailStatus
};
