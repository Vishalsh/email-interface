import { createAction } from 'redux-actions';

import {
  ADD_EMAILS,
} from "./emails.actionTypes";

const addEmails = createAction(ADD_EMAILS);

export default {
  addEmails
};
