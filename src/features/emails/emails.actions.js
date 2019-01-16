import { createAction } from 'redux-actions';

import {
  ADD_EMAILS,
  UPDATE_EMAIL_STATUS
} from "./emails.actionTypes";

const addEmails = createAction(ADD_EMAILS);
const updateEmailStatus = createAction(UPDATE_EMAIL_STATUS);

export default {
  addEmails,
  updateEmailStatus
};
