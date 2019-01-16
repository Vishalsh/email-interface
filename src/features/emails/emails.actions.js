import { createAction } from 'redux-actions';

import http from 'utilities/http';
import apiEndPoints from 'constants/apiEndPoints';
import {
  ADD_EMAILS,
  UPDATE_EMAIL_STATUS_SUCCESSFUL
} from "./emails.actionTypes";

const addEmails = createAction(ADD_EMAILS);
const updateEmailStatusSuccessful = createAction(UPDATE_EMAIL_STATUS_SUCCESSFUL);

const updateEmailStatus = (email) => (dispatch) => {
  return http.put(apiEndPoints.updateEmail(email.id), email)
    .then(() => {
      dispatch(updateEmailStatusSuccessful({ email }))
    })
    .catch(() => {
    });
};

export default {
  addEmails,
  updateEmailStatus
};
