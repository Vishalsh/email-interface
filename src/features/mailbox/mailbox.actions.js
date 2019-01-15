import { createAction } from 'redux-actions';

import http from 'utilities/http';
import apiEndPoints from 'constants/apiEndPoints';
import {
  GET_EMAILS_SUCCESSFUL,
  GET_EMAILS_FAILED
} from "./mailbox.actionTypes";

const getEmailSuccessful = createAction(GET_EMAILS_SUCCESSFUL);
const getEmailFailed = createAction(GET_EMAILS_FAILED);

const getEmails = (mailbox) => (dispatch, getState) => {
  const { user } = getState();

  return http.get(apiEndPoints.getEmails(user.data.id, mailbox))
    .then((emails) => {
      dispatch(getEmailSuccessful({ mailbox, emails }));
    })
    .catch(() => {
      dispatch(getEmailFailed({ mailbox }));
    });
};

export default {
  getEmails
};
